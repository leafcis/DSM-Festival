const initState = {
    isLogin : false
}

const CheckLogin = (state = initState, action) => {
    switch(action.type) {
        case 'ISLOGIN': return {
            isLogin : action.state
        }
        default : return state
    }
}

export default CheckLogin