import { Routes } from '@angular/router';
import { SpaBodyComponent } from 'src/SPA/spa-body/spa-body.component';
import { JsonFormComponent } from './json-form/json-form.component'
export const appRoutes : Routes = [
    {path: '', component : JsonFormComponent},
    {path:'jsonForm', component: JsonFormComponent},
    {path:'**', component: JsonFormComponent}
];
