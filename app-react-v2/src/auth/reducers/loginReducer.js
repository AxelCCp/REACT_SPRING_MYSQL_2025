/*
export const loginReducer = (state = {}, action) => {

    switch (action.type) {
        case 'login':
            return {
                isAuth: true,
                isAdmin: action.payload.isAdmin,
                nickName: action.payload.nickName,
                user: action.payload,
            };
        case 'logout':
            return {
                isAuth: false,
                isAdmin: false,
                nickName: '',
                user: undefined
            };
        default:
            return state;
    }

}

*/