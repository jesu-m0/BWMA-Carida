import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverPageComponent } from './components/templates/driver-page/driver-page.component';
import { IndexPageComponent } from './components/templates/IndexPage/IndexPage.component';
import { LoginPageComponent } from './components/templates/loginPage/loginPage.component';

const routes: Routes = [
  {path: '', component: IndexPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'driver', component: DriverPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
