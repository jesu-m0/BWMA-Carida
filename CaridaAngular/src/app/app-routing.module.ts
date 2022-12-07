import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GooglemapComponent } from './components/googlemap/googlemap.component';
import { MapInfoWindowComponent } from './components/map-info-window/map-info-window.component';
import { MapMarkerComponent } from './components/map-marker/map-marker.component';
import { MapPolylineComponent } from './components/map-polyline/map-polyline.component';

const routes: Routes = [
  {path:'',component:GooglemapComponent},
  {path: 'map-marker', component: MapMarkerComponent},
  {path: 'map-info-window', component: MapInfoWindowComponent},
  {path: 'map-polyline', component: MapPolylineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
