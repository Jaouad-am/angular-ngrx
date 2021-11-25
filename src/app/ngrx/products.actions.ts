import { Action } from "@ngrx/store";
import { type } from "os";

export enum ProductActionTypes {
    GET_ALL_PRODUCTS = "Get All Products",
    GET_ALL_PRODUCTS_SUCCESS = "Get All Products SUCCESS",
    GET_ALL_PRODUCTS_ERROR = "Get All Products ERROR",
}

export class GetAllProductsAction implements Action {
    type: ProductActionTypes = ProductActionTypes.GET_ALL_PRODUCTS;
    constructor(public payload: any) { }
}

export class GetAllProductsActionSuccess implements Action {
    type: ProductActionTypes = ProductActionTypes.GET_ALL_PRODUCTS_SUCCESS;
    constructor(public payload: any) { }
}

export class GetAllProductsActionError implements Action {
    type: ProductActionTypes = ProductActionTypes.GET_ALL_PRODUCTS_ERROR;
    constructor(public payload: string) { }
}

export type ProductActions =
    GetAllProductsAction | GetAllProductsActionSuccess | GetAllProductsActionError