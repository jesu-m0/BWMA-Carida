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
import { DriverPageComponent } from './components/templates/driver-page/driver-page.component';

const appRoutes: Routes=[

  {path:'', component: IndexPageComponent},
  {path:'login', component: LoginPageComponent}



]

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    NavarComponent,
    FooterComponent,
    LoginPageComponent,
    DriverPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
