import { IUserLogin, IUserRegister } from "../../utils/TypeScript"
import { Dispatch } from "redux"
import { AUTH, IAuthType } from "../types/authTypes"
import { IAlertType, ALERT } from "../types/alertTypes"
import { getAPI, postAPI } from "../../utils/FetchData"
import { checkTokenExp } from "../../utils/checkTokenExp"

export const login = (userLogin: IUserLogin)=>
async(dispatch : Dispatch<IAuthType | IAlertType>) =>{
    try {
        dispatch({
            type: ALERT, 
            payload: {
                loading: true
            }
        })
        const res = await postAPI('login',userLogin)
        dispatch({
            type: AUTH,
            payload: res.data
        })
        dispatch({
            type: ALERT,
            payload: {
                success: res.data.msg
            }
        })
        localStorage.setItem('logged', 'you are logged')
    } catch (error : any) {
        dispatch({
            type: ALERT,
            payload: {
                errors: error.response.data.msg
            }
        })
    }
}

export const register = (userRegister: IUserRegister)=>
async(dispatch : Dispatch<IAuthType | IAlertType>) =>{
    try {
        dispatch({
            type: ALERT,
            payload: {
                loading: true,
            }
        })
        const res = await postAPI('register',userRegister)
        dispatch({
            type: ALERT,
            payload: {
                success: res.data.msg
            }
        })
    } catch (error : any) {
        dispatch({
            type: ALERT,
            payload: {
                errors: error.response.data.msg
            }
        })
    }
}

export const refreshToken = () => 
async(dispatch: Dispatch<IAlertType | IAuthType>)=>{
    const logged = localStorage.getItem('logged')
    if(logged !== 'you are logged') return;

    try {
        dispatch({
            type: ALERT,
            payload: {
                loading: true
            }
        })
        const res = await getAPI('refresh_token')
        dispatch({
            type: AUTH,
            payload: res.data
        })

        dispatch({
            type: ALERT,
            payload: {}
        })
    } catch (error : any) {
        dispatch({
            type: ALERT,
            payload: {
                errors: error.response.data.msg
            }
        })
    }
}

export const logout = (token: string)=>
async(dispatch:Dispatch<IAuthType | IAlertType>) =>{
    const result = await checkTokenExp(token,dispatch)
    const access_token = result ? result : token
    try {
        localStorage.removeItem('logged')
        dispatch({
            type: AUTH,
            payload: {}
        })
        const res = await getAPI('logout',access_token)
        dispatch({
            type: AUTH,
            payload: res.data
        })
    } catch (error : any) {
        dispatch({
            type: ALERT,
            payload: {
                errors: error.response.data.msg
            }
        })
    }
}

export const googleLogin = (id_token : string) => async(dispatch: Dispatch <IAlertType | IAuthType>)=>{
    try {
        dispatch({
            type: ALERT,
            payload: {
                loading: true
            }
        })
        const res = await postAPI('google_login',{id_token})
        dispatch({ type: AUTH,payload: res.data })

        dispatch({ type: ALERT, payload: { success: res.data.msg } })
        localStorage.setItem('logged', 'you are logged')
    } catch (error:any) {
        dispatch({
            type: ALERT,
            payload: {
                errors: error.response.data.msg
            }
        })
    }
}