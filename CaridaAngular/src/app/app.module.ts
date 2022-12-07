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
import { GoogleMapsModule } from '@angular/google-maps';
import { AppNavigationBarComponent } from './components/app-navigation-bar/app-navigation-bar.component';
import { GooglemapComponent } from './components/googlemap/googlemap.component';
import { MapMarkerComponent } from './components/map-marker/map-marker.component';
import { MapInfoWindowComponent } from './components/map-info-window/map-info-window.component';
import { MapPolylineComponent } from './components/map-polyline/map-polyline.component';

const appRoutes: Routes=[

  {path:'', component: IndexPageComponent}



]

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    NavarComponent,
    FooterComponent,
    AppNavigationBarComponent,
    GooglemapComponent,
    MapMarkerComponent,
    MapInfoWindowComponent,
    MapPolylineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
