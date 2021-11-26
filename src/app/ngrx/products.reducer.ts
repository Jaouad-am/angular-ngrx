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

export function productsReducer(state: ProductsState = initialState, action: ProductActions): ProductsState {
    switch (action.type) {
        case ProductActionTypes.GET_ALL_PRODUCTS:
            return { ...state, dataState: ProductsStateEnum.LOADING }
        case ProductActionTypes.GET_ALL_PRODUCTS_SUCCESS:
            return { ...state, dataState: ProductsStateEnum.LOADED, products: action.payload }
        case ProductActionTypes.GET_ALL_PRODUCTS_ERROR:
            return { ...state, dataState: ProductsStateEnum.ERROR, errorMessage: action.payload }
        default: return { ...state }
    }

}

