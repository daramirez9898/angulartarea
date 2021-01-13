import { Component } from '@angular/core';
import { ProductoService } from './services/producto.service';
import { Global } from './services/global';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ProductoService]
})
export class AppComponent {
  title = 'demostracion';
}
