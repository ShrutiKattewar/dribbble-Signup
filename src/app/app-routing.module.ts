import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FinishComponent } from './finish/finish.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: SignupComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'finish', component: FinishComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
