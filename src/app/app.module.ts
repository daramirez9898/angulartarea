import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { MostrarComponent } from './components/mostrar/mostrar.component';
import { ModificarComponent } from './components/modificar/modificar.component';
import { BorrarComponent } from './components/borrar/borrar.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarComponent,
    MostrarComponent,
    ModificarComponent,
    BorrarComponent,
    HomeComponent,
    ErrorComponent
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
