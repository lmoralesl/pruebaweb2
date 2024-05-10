import { Routes } from '@angular/router';

import { MotosComponent } from './pages/motos/motos.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { DetallesMotosComponent } from './pages/detalles-motos/detalles-motos.component';
import { EdtiarMotoComponent } from './pages/editar-moto/edtiar-moto.component';
import { Error404Component } from './pages/error404/error404.component';

export const routes: Routes = [
    {path:'',redirectTo:'motocicletas',pathMatch:'full'},
    
    {path:'motocicletas',component:MotosComponent},
    {path:'empleados',component:EmpleadosComponent},
    {path:'gestion',component:GestionComponent},
    { path: 'detalles/:idCarros', component: DetallesMotosComponent},
    { path: 'editar/:idCarros', component: EdtiarMotoComponent},

    {path:'**',component:Error404Component},
];
