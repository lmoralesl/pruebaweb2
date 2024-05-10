import { Component, inject } from '@angular/core';
import { CatalogoMotosService } from '../../services/catalogo-motos.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabla-gestion',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './tabla-gestion.component.html',
  styleUrl: './tabla-gestion.component.css'
})
export class TablaGestionComponent {
  servicio = inject(CatalogoMotosService)

  motos : any;
  marca ="";
  placa ="";

  ngOnInit(){
    this.servicio.getmotos().subscribe(p=>(
      this.motos = p
    )

    )

  }

  
  eliminar(id:any){
    this.servicio.deleteMotosID(id).subscribe()
    window.location.reload()
    
  }
  visualizar: any
  ver( id: any){
    this.visualizar = id
  }
 busqueda:any
}
