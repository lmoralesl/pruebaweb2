import { Component } from '@angular/core';
import { TablaGestionComponent } from '../../components/tabla-gestion/tabla-gestion.component';

@Component({
  selector: 'app-gestion',
  standalone: true,
  imports: [TablaGestionComponent],
  templateUrl: './gestion.component.html',
  styleUrl: './gestion.component.css'
})
export class GestionComponent {

}
