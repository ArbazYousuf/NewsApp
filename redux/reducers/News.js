import * as ActionTypes from '../types';

const initialState = {
    isLoading: false,
    categories:[]
};

const Video = (state = initialState, action) => {

    if (action === undefined) return state;
    switch (action.type) {
        case ActionTypes.NEWS:
            return {
                ...state,
                isLoading: true,
            };

        case ActionTypes.NEWS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                categories: action.payload.data
            };

        case ActionTypes.NEWS_FAIL:
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
};

export default Video;
