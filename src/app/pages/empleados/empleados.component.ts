import { Component } from '@angular/core';
import { GaleriaEmpleadosComponent } from '../../components/galeria-empleados/galeria-empleados.component';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [GaleriaEmpleadosComponent],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {

}
