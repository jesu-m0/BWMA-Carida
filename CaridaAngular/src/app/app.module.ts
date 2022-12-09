import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavarComponent } from './components/simpleComponents/navar/navar.component';
import { IndexPageComponent } from './components/templates/IndexPage/IndexPage.component';
import { FooterComponent } from './components/simpleComponents/footer/footer.component';
import { LoginPageComponent } from './components/templates/loginPage/loginPage.component';
import { RegisterPageComponent } from './components/templates/registerPage/registerPage.component';
import { UsersServiceService } from './services/UsersService.service';
import { NewTripPageComponent } from './components/templates/newTripPage/newTripPage.component';
import { GoogleMapsModule } from '@angular/google-maps';

const appRoutes: Routes=[
  {path:'', component: IndexPageComponent},
  {path:'login', component: LoginPageComponent},
  {path:'register', component: RegisterPageComponent},
  {path:'newtrip', component: NewTripPageComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    NavarComponent,
    FooterComponent,
    LoginPageComponent,
    RegisterPageComponent,
    NewTripPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    GoogleMapsModule
  ],
  providers: [UsersServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
