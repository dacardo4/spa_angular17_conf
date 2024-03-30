import { Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { PrimerComponenteComponent } from './components/primer-componente/primer-componente.component';
import { SegundoComponenteComponent } from './components/segundo-componente/segundo-componente.component';

export const routes: Routes = [
    { path: 'davidTest/primer', component: PrimerComponenteComponent },
    { path: 'davidTest/segundo', component: SegundoComponenteComponent },
    { path: '**', component: EmptyRouteComponent },
];
