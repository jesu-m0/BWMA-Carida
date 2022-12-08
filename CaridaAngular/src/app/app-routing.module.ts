import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//No poner las rutas aqui ponerlas en el app.module.ts
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
