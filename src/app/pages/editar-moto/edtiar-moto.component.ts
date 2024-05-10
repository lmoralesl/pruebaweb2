import { Component, inject } from '@angular/core';
import { CatalogoMotosService } from '../../services/catalogo-motos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-moto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edtiar-moto.component.html',
  styleUrl: './edtiar-moto.component.css'
})
export class EdtiarMotoComponent {
servicio = inject(CatalogoMotosService)
route = inject(Router)
ruta = inject(ActivatedRoute)

  id:any
  precio:any
  placa:any
  anio:any
  imagen:any
  motos:any


  editar(datos:any){
    this.servicio.putMotos(datos.value).subscribe()
    this.route.navigateByUrl("gestion")
  }
  ngOnInit(){
    this.ruta.params.subscribe( p =>{
     this.id= p['idCarros']
 
     this.servicio.getMotosUnico(this.id).subscribe( e =>{
       this.motos= e
     })
 
 
    })
   }
}
