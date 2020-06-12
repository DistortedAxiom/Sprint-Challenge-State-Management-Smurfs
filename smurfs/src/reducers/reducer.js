import { GET_DATA, GET_DATA_SUCCESS, GET_DATA_FAILURE} from '../actions/actions';

const initialState = {
    data: [],
    error: '',
    isLoading: false,
};

export const smurfReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_DATA:
            return {
                ...state,
                isLoading: true
            }
        case GET_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        case GET_DATA_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}
