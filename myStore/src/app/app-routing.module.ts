import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/confirmation-page/cart/cart.component';
import { ProductComponent} from './components/product/product.component';
import { ConfirmationPageComponent} from './components/confirmation-page/confirmation-page.component';
import { ProductListComponent} from './components/product-list/product-list.component';

const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'cart', component: CartComponent},
  {path: 'confirmation', component: ConfirmationPageComponent},
  {path: 'product', component: ProductComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
