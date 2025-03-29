// import { Routes } from '@angular/router';
// import { LoginComponent } from './pages/admin/login/login.component';
// import { LayoutComponent } from './pages/admin/layout/layout.component';
// import { ProductsComponent } from './pages/admin/products/products.component';

// export const routes: Routes = [
// {
//     path:'',
//     redirectTo:'login',
//     pathMatch:'full'
// },
// {
//     path:'login',
//     component:LoginComponent
// },
// {
//     path:'',
//     component:LayoutComponent,
//     children:[
//         {
//             path:'products',
//             component:ProductsComponent
//         }
//     ]
// }
// ];


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LandingComponent } from './landing/landing.component'; // Example

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' }, // Default route
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'order', component: OrderComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'landing', component: LandingComponent }, // Added Landing Route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
