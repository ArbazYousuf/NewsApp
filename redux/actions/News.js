import { Axios } from 'axios';
import * as Actiontypes from '../types';
import ApiKey from '../../Utils/ApiKey';

export const FetchNewsCategory = () => {
    return (dispatch) => {

        // dispatch({
        //     type: Actiontypes.NEWS_CATEGORY,
        // });
        try {
            const response = Axios.get(
                `https://newsapi.org/v2/sources?apiKey=${ApiKey}`
            );

            const data = response.data;
            dispatch({
                type: Actiontypes.NEWS_CATEGORY_SUCCESS,
                data: [...new Set(data.sources.map((sources) => sources.category))],
            });

        } catch (error) {
            console.error(error);
            dispatch({
                type: Actiontypes.NEWS_CATEGORY_FAIL,
            });
        }
    };
};
