import { Action } from "@ngrx/store";
import { Product } from "../model/product.model";
import { ProductActions, ProductActionTypes } from "./products.actions";


export enum ProductsStateEnum {
    LOADING = "LOADING",
    LOADED = "LOADED",
    ERROR = "ERROR",
    INITIAL = "INITIAL"
}

//Declaring the state

export interface ProductsState {
    products: Product[],
    errorMessage: string,
    dataState: ProductsStateEnum

}

//Reducer

//initializing the state
const initialState: ProductsState = {
    products: [],
    errorMessage: "",
    dataState: ProductsStateEnum.INITIAL
}

export function productsReducer(state = initialState, action: Action): ProductsState {
    switch (action.type) {
        case ProductActionTypes.GET_ALL_PRODUCTS:
            return { ...state, dataState: ProductsStateEnum.LOADING }
        case ProductActionTypes.GET_ALL_PRODUCTS_SUCCESS:
            return { ...state, dataState: ProductsStateEnum.LOADED, products: (<ProductActions>action).payload }
        case ProductActionTypes.GET_ALL_PRODUCTS_ERROR:
            return { ...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductActions>action).payload }
        default: return { ...state }
    }

}

