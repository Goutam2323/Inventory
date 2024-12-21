import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInComponent } from './sign-in.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [SignInComponent],
  imports: [CommonModule, FormsModule, HttpClientModule, SignInRoutingModule],
})
export class SignInModule {}
