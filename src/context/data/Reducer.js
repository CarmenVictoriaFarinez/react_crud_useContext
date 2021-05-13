import { CREATE_DATA, EDITED_DATA, UPDATE_DATA, DELETE_DATA} from '../types'

const Reducer = (state, action ) => {
    const { type, payload } = action;
    switch(type){
    
        case CREATE_DATA:
            return {
                ...state,
                users: [...state.users, payload]
            }
       
        case EDITED_DATA:
            return {
                ...state,
                edited: payload
            }
        case UPDATE_DATA:
            return {
                ...state,
                edited: null,
                users: state.users.map(user => user.id === payload.id ? {...user, ...payload} : user)
            }
        case DELETE_DATA: 
            return {
                ...state,
                users: state.users.filter(user => user.id !== payload)
            }
        default:
                return state
        }
    }

    export default Reducer;