import axiosInstance from "../helpers/axios";
import { categoryConstants } from './constants';

export const getAllCategory = () => {
    return async dispatch => {
       
        try {
            dispatch({type: categoryConstants.CATEGORY_GET_REQUEST});
            const res = await axiosInstance.get(`/category/getCategories`);
            if(res.status === 200){
                const {categoryList} = res.data;
                dispatch({
                    type: categoryConstants.CATEGORY_GET_SUCCESS,
                    payload: {categories: categoryList}
                });
            }else{
                dispatch({
                    type: categoryConstants.CATEGORY_GET_FAILURE,
                    payload: res.data.error
                });
            }
            
        } catch (error) {
            dispatch({
                type: categoryConstants.CATEGORY_GET_FAILURE,
                payload: error.message
            });
        }
    }
}