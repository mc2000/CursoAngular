import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { EnlacesComponent } from './components/enlaces/enlaces.component';
import {AutoresComponent } from  './components/autores/autores.component';
import {CatalogoComponent } from  './components/catalogo/catalogo.component';

import {AboutComponent } from  './components/about/about.component'; 

const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'enlaces', component: EnlacesComponent },
    { path: 'autores', component: AutoresComponent },
    { path: 'catalogo', component: CatalogoComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', pathMatch:'full', redirectTo: 'inicio' }
];

export const appRouting = RouterModule.forRoot(routes);