import { Action } from "@ngrx/store";
import { Product } from "../model/product.model";

export enum ProductActionTypes {
    //Get all Products
    GET_ALL_PRODUCTS = "Get All Products",
    GET_ALL_PRODUCTS_SUCCESS = "Get All Products SUCCESS",
    GET_ALL_PRODUCTS_ERROR = "Get All Products ERROR",
    //Get selected Products
    GET_SELECTED_PRODUCTS = "Get SELECTED Products",
    GET_SELECTED_PRODUCTS_SUCCESS = "Get SELECTED Products SUCCESS",
    GET_SELECTED_PRODUCTS_ERROR = "Get All Products ERROR",
}

//Get All Products Actions
export class GetAllProductsAction implements Action {
    type: ProductActionTypes = ProductActionTypes.GET_ALL_PRODUCTS;
    constructor(public payload: any) { }
}

export class GetAllProductsActionSuccess implements Action {
    type: ProductActionTypes = ProductActionTypes.GET_ALL_PRODUCTS_SUCCESS;
    constructor(public payload: Product[]) { }
}

export class GetAllProductsActionError implements Action {
    type: ProductActionTypes = ProductActionTypes.GET_ALL_PRODUCTS_ERROR;
    constructor(public payload: string) { }
}

//Get selected Products Actions
export class GetSelectedProductsAction implements Action {
    type: ProductActionTypes = ProductActionTypes.GET_SELECTED_PRODUCTS;
    constructor(public payload: any) { }
}

export class GetSelectedProductsActionSuccess implements Action {
    type: ProductActionTypes = ProductActionTypes.GET_ALL_PRODUCTS_SUCCESS;
    constructor(public payload: Product[]) { }
}

export class GetSelectedProductsActionError implements Action {
    type: ProductActionTypes = ProductActionTypes.GET_SELECTED_PRODUCTS_ERROR;
    constructor(public payload: string) { }
}

export type ProductActions =
    GetAllProductsAction | GetAllProductsActionSuccess | GetAllProductsActionError |
    GetSelectedProductsAction | GetSelectedProductsActionSuccess | GetSelectedProductsActionError