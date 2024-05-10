import { Component, inject } from '@angular/core';
import { CatalogoMotosService } from '../../services/catalogo-motos.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-galeria-motos',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './galeria-motos.component.html',
  styleUrl: './galeria-motos.component.css'
})
export class GaleriaMotosComponent {
  servicio = inject(CatalogoMotosService)

  motocicletas : any;
  anio ="";

  ngOnInit(){
    this.servicio.getmotos().subscribe(p=>(
      this.motocicletas = p
    )

    )

  }

  
  visualizar: any
  ver( id: any){
    this.visualizar = id
  }
 busqueda:any
}
