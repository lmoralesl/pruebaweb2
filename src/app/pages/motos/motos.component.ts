import { Component } from '@angular/core';
import { GaleriaMotosComponent } from '../../components/galeria-motos/galeria-motos.component';

@Component({
  selector: 'app-motos',
  standalone: true,
  imports: [GaleriaMotosComponent],
  templateUrl: './motos.component.html',
  styleUrl: './motos.component.css'
})
export class MotosComponent {

}
