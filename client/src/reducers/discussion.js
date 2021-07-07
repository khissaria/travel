import { FETCH_DISCUSSION, CREATE_DISCUSSION, GET_DISCUSSION, DELETE_DISCUSSION, EDIT_DISCUSSION } from '../constants/actionType.js';
const reducer = (discussion = [], action) => {
    switch (action.type) {
        case FETCH_DISCUSSION:
            return action.payload;
        case CREATE_DISCUSSION:
            return [...discussion, action.payload];
        case GET_DISCUSSION:
            return action.payload;
        case DELETE_DISCUSSION:
            return discussion.filter((disc) => disc._id !== action.payload);
        case EDIT_DISCUSSION:
            return discussion.map((disc) => (disc._id === action.payload._id ? action.payload : disc));
        default: return discussion;
    }
};

export default reducer;