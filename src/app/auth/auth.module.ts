import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from './auth.service';
import { SignupComponent } from './signup/signup.component';
// import { MatKeyboardModule } from '@ngx-material-keyboard/core';

@NgModule({
  imports: [
    SharedModule,
    AuthRoutingModule,
    // MatKeyboardModule
  ],
  declarations: [SigninComponent, SignupComponent],
  entryComponents: [SignupComponent],
  providers: [],
})
export class AuthModule {}
