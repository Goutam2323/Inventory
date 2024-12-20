import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from './forms/product-form/product-form.component';

const routes: Routes = [
  { path: 'product-form', component: ProductFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
