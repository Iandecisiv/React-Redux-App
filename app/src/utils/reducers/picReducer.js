import { LOADING, PIC_SUCCESS, ERROR } from '../actions/picActions';

const initialState = {
    pics: {},
    loading: false,
    error: "",
};

export function picReducer(state = initialState, action) {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true,
            };
        case PIC_SUCCESS:
            return {
                ...state,
                loading: false,
                pics: action.payload,
            };
        case ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}