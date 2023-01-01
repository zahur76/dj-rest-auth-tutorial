function GetUser() {

    try {
        let token = localStorage.getItem('user')
        if(token){
            return true
        }else{
            return false
        }
    } catch (error) {
        console.log(error)
    }   
}

export default GetUser;