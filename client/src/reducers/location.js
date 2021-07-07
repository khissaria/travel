import { FETCH_ALL,CREATE } from '../constants/actionType.js';
const reducer= (location=[],action) => {
    switch(action.type)
    {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...location,action.payload];
       
        default: return location;
    }
};

export default reducer;