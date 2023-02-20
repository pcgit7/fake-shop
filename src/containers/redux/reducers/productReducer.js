import { ActionTypes } from "../contents/action_type";

const inititalState = {
    products : [
    ],
};

export const productReducer = (state=inititalState , {type , payload}) => {
    
    switch(type)
    {
        case ActionTypes.SET_PRODUCTS : 
        return {
            ...state,
            products : payload
        };

        default : 
        return state;
    }
};

export const selectedProductReducer = (state = {},{type,payload}) => {
    
    switch(type)
    {
        case ActionTypes.SELECTED_PRODUCTS : 
        return {
            ...state,
            ...payload
        };
        
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
        return {};

        default : 
        return state;
    }
};



