function SignIn() {

    try {
        let token = localStorage.getItem('token')
        if(token){
            return true
        }else{
            return false
        }
    } catch (error) {
        console.log(error)
    }   
}

export default SignIn;
