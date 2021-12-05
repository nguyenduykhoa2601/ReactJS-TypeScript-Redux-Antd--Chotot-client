import React from 'react'
import { useSelector } from 'react-redux'
import ChangePasswordForm from '../../components/profile/ChangePassword'
import { RootStore } from '../../utils/TypeScript'


const ChangePassword = () =>{
    const {auth} = useSelector((state: RootStore)=>state)
    return (
        <div>
            {auth && <ChangePasswordForm />}
        </div>
    )
}
export default ChangePassword
