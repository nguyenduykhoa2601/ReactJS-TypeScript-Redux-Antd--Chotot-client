export const checkPassword = (password: string, cf_password: string)=>{
    if (password.length < 6){
        return "Password must be 6 character at least"
    }
    else if (password !== cf_password){
        return "Password didn't match"
    }
}