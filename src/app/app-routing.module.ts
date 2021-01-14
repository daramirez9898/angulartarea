import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

//rutas de Productos
import { AgregarComponent } from './components/agregar/agregar.component';
import { MostrarComponent } from './components/mostrar/mostrar.component';
import { ModificarComponent } from './components/modificar/modificar.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { EditarComponent } from './components/editar/editar.component';
import { OrganizadorComponent } from './components/organizador/organizador.component';
// rutas de paises
import { AgregarPaisComponent } from './pais/agregar-pais/agregar-pais.component';
import { MostrarPaisComponent } from './pais/mostrar-pais/mostrar-pais.component';
import { OrganizadorPaisComponent } from './pais/organizador-pais/organizador-pais.component';
import { ModificarPaisComponent } from './pais/modificar-pais/modificar-pais.component';
import { EditarPaisComponent } from './pais/editar-pais/editar-pais.component';

//rutas de importado
import { AgregarImportadoComponent } from './importado/agregar-importado/agregar-importado.component';
import { EditarImportadoComponent } from './importado/editar-importado/editar-importado.component';
import { MostrarImportadoComponent } from './importado/mostrar-importado/mostrar-importado.component';
import { OrganizadorImportadoComponent } from './importado/organizador-importado/organizador-importado.component';
import { ModificarImportadoComponent } from './importado/modificar-importado/modificar-importado.component';



const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'agregar', component: AgregarComponent },
  {path: 'agregarPais', component: AgregarPaisComponent },
  {path: 'agregarImportado', component: AgregarImportadoComponent },
  {path: 'mostrar', component: MostrarComponent },
  {path: 'mostrarPais', component: MostrarPaisComponent },
  {path: 'mostrarImportado', component: MostrarImportadoComponent },
  {path: 'producto/:id', component: ModificarComponent },
  {path: 'pais/:id', component: ModificarPaisComponent},
  {path: 'importado/:id', component: ModificarImportadoComponent},
  {path: 'editarProducto/:id', component: EditarComponent },
  {path: 'editarPais/:id', component: EditarPaisComponent},
  {path: 'editarImportado/:id', component: EditarImportadoComponent},
  {path: 'menuProducto', component: OrganizadorComponent },
  {path: 'menuPais', component: OrganizadorPaisComponent },
  {path: 'menuImportado', component: OrganizadorImportadoComponent},
  {path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
