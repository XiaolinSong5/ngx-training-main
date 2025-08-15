import {Router, Routes} from '@angular/router';
import {StoreViewComponent} from "./store-view/store-view.component";
import {CartViewComponent} from "./cart-view/cart-view.component";
import {CheckoutViewComponent} from "./checkout-view/checkout-view.component";
import {inject} from "@angular/core";
import {LoginService} from "./login/login.service";
import {LoginComponent} from "./login/login.component";


export const routes: Routes = [
  {
    path: '', component: StoreViewComponent
  },
  {
    path: 'cart', component: CartViewComponent
  },
  {
    path: 'checkout', component: CheckoutViewComponent,
    canActivate: [() => inject(LoginService).isUserLoggedIn()
      || inject(Router).parseUrl('login')
    ]
  },
  {
    path: 'login', component: LoginComponent
  }

];

