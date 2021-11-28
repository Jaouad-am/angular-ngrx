import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetAllProductsAction } from 'src/app/ngrx/products.actions';

@Component({
  selector: 'app-products-navbar',
  templateUrl: './products-navbar.component.html',
  styleUrls: ['./products-navbar.component.css']
})
export class ProductsNavbarComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
  }

  getAllProducts() {
    this.store.dispatch(new GetAllProductsAction({}))
  }
  getSelectedProducts() { }

}
