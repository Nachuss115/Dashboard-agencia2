import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CargaPorLlegarComponent } from './dashboard/carga-por-llegar/carga-por-llegar.component';
import { CargaEnRecepcionComponent } from './dashboard/carga-en-recepcion/carga-en-recepcion.component';
import { CargaPorEnviarComponent } from './dashboard/carga-por-enviar/carga-por-enviar.component';
import { ManifiestoDetalleComponent } from './dashboard/carga-por-llegar/manifiesto-detalle/manifiesto-detalle.component';
//Importe de los componentes detalle de carga en recepción
import { DetalleRecepcionadoComponent } from './dashboard/carga-en-recepcion/detalle-recepcionado/detalle-recepcionado.component';
import { DetalleClasificacionComponent } from './dashboard/carga-en-recepcion/detalle-clasificacion/detalle-clasificacion.component';
import { DetalleClasificacionRepartoComponent } from './dashboard/carga-en-recepcion/detalle-clasificacion-reparto/detalle-clasificacion-reparto.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'carga-por-llegar', pathMatch: 'full' },
      { path: 'carga-por-llegar', component: CargaPorLlegarComponent },
      {
        path: 'carga-por-llegar/manifiesto/:id',
        component: ManifiestoDetalleComponent,
      },
      { path: 'carga-en-recepcion', component: CargaEnRecepcionComponent },
      {
        path: 'carga-en-recepcion/recepcionado/:id',
        component: DetalleRecepcionadoComponent,
      },
      {
        path: 'carga-en-recepcion/clasificacion/:id',
        component: DetalleClasificacionComponent,
      },
      {
        path: 'carga-en-recepcion/clasificacion-reparto/:id',
        component: DetalleClasificacionRepartoComponent,
      },
      { path: 'carga-por-enviar', component: CargaPorEnviarComponent },
      {
        path: 'recepcionado',
        component: DetalleRecepcionadoComponent,
        data: { buttonIndex: 0 },
      },
      {
        path: 'clasificacion',
        component: DetalleClasificacionComponent,
        data: { buttonIndex: 1 },
      },
      {
        path: 'clasificacion-reparto',
        component: DetalleClasificacionRepartoComponent,
        data: { buttonIndex: 2 },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
