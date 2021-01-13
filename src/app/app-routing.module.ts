import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AgregarComponent } from './components/agregar/agregar.component';
import { MostrarComponent } from './components/mostrar/mostrar.component';
import { ModificarComponent } from './components/modificar/modificar.component';
import { BorrarComponent } from './components/borrar/borrar.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';



const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'agregar', component: AgregarComponent },
  {path: 'mostrar', component: MostrarComponent },
  {path: 'producto/:id', component: ModificarComponent },
  {path: 'borrar', component: BorrarComponent },
  {path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
