import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { mergeMap, map, catchError } from "rxjs/operators";
import { ProductsService } from "../services/products.service";
import { GetAllProductsActionError, GetAllProductsActionSuccess, GetSelectedProductsAction, GetSelectedProductsActionError, GetSelectedProductsActionSuccess, ProductActionTypes } from "./products.actions";

@Injectable()
export class ProductsEffects {
    constructor(private productsService: ProductsService, private effectActions: Actions) { }

    getAllProductsEffect: Observable<Action> = createEffect(
        () => this.effectActions.pipe(
            ofType(ProductActionTypes.GET_ALL_PRODUCTS),
            mergeMap(action => {
                return this.productsService.getProducts()
                    .pipe(
                        map((products) => new GetAllProductsActionSuccess(products)),
                        catchError((err) => of(new GetAllProductsActionError(err.message)))
                    )
            })
        )

    );
    getSelectedProductsEffect: Observable<Action> = createEffect(
        () => this.effectActions.pipe(
            ofType(ProductActionTypes.GET_SELECTED_PRODUCTS),
            mergeMap(action => {
                return this.productsService.getSelectedProducts()
                    .pipe(
                        map((products) => new GetSelectedProductsActionSuccess(products)),
                        catchError((err) => of(new GetSelectedProductsActionError(err.message)))
                    )
            })
        )

    );

}