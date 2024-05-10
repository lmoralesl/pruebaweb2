import { Component, inject } from '@angular/core';
import { ApiexternaService } from '../../services/apiexterna.service';

@Component({
  selector: 'app-galeria-empleados',
  standalone: true,
  imports: [],
  templateUrl: './galeria-empleados.component.html',
  styleUrl: './galeria-empleados.component.css'
})
export class GaleriaEmpleadosComponent {
  servicio = inject(ApiexternaService)
  empleados : any;
  ngOnInit(){
    this.servicio.getApi().subscribe(p=>(
      this.empleados = p
    ))
  }
  visualizar: any
  ver( id: any){
    this.visualizar = id
  }

}
