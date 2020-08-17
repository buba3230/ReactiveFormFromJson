import { Routes } from '@angular/router';
import { SpaBodyComponent } from 'src/SPA/spa-body/spa-body.component';
export const appRoutes : Routes =[
    {path:'**', component: SpaBodyComponent}
];
