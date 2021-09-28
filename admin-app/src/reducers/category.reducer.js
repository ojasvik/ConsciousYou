
import { categoryConstants } from './../actions/constants';
const initState = {
    categories: [],
    loading: false,
    error: null,
    message: ''
};

const categoryReducer = (state = initState, action) => {
    switch (action.type) {
        case categoryConstants.CATEGORY_GET_SUCCESS:
            state= {
                ...state,
                categories: action.payload.categories,
            }
            break;
            
        default:
            break;
    }
    return state;
};

export default categoryReducer;