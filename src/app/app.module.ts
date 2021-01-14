import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { MostrarComponent } from './components/mostrar/mostrar.component';
import { ModificarComponent } from './components/modificar/modificar.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { EditarComponent } from './components/editar/editar.component';
import { OrganizadorComponent } from './components/organizador/organizador.component';
import { AgregarPaisComponent } from './pais/agregar-pais/agregar-pais.component';
import { MostrarPaisComponent } from './pais/mostrar-pais/mostrar-pais.component';
import { OrganizadorPaisComponent } from './pais/organizador-pais/organizador-pais.component';
import { ModificarPaisComponent } from './pais/modificar-pais/modificar-pais.component';
import { EditarPaisComponent } from './pais/editar-pais/editar-pais.component';
import { AgregarImportadoComponent } from './importado/agregar-importado/agregar-importado.component';
import { EditarImportadoComponent } from './importado/editar-importado/editar-importado.component';
import { MostrarImportadoComponent } from './importado/mostrar-importado/mostrar-importado.component';
import { OrganizadorImportadoComponent } from './importado/organizador-importado/organizador-importado.component';
import { ModificarImportadoComponent } from './importado/modificar-importado/modificar-importado.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarComponent,
    MostrarComponent,
    ModificarComponent,
    HomeComponent,
    ErrorComponent,
    EditarComponent,
    OrganizadorComponent,
    AgregarPaisComponent,
    MostrarPaisComponent,
    OrganizadorPaisComponent,
    ModificarPaisComponent,
    EditarPaisComponent,
    AgregarImportadoComponent,
    EditarImportadoComponent,
    MostrarImportadoComponent,
    OrganizadorImportadoComponent,
    ModificarImportadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
