import { Button } from "antd"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { forgotPassword } from "../redux/actions/authAction"

const ForgotPassword  = ()=>{
    const [account,setAccount] = useState('')
    const dispatch = useDispatch()
    const handleSubmit = ()=>{
        dispatch(forgotPassword(account))
    }
    return (
        <div className="forgot__password">
            <h1>Forgot Password ? </h1>
            <input type="text" name="account" onChange={(e)=>setAccount(e.target.value)}  />
            <Button type="primary" onClick={handleSubmit} >Confirm</Button>
        </div>
    )
}

export default ForgotPassword