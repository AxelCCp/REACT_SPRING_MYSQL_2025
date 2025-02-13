

export const userSystemReducer = (state = [], action) => {


    switch (action.type) {

        case 'loadUsersSystem':
            return action.payload;

        case 'addUserSystem':
            return [
                ...state,
                {
                    ...action.payload,
                }
            ];

        case 'updateUserSystem':
            return state.map(u => {
                if (u.idUser === action.payload.idUser) {
                    return {
                        ...action.payload
                    };
                }
                return u;
            }); 

        case 'deleteUserSystem':
            return state.filter(userSystem => userSystem.idUser !== action.payload);

        default:
            return state;

    }
}