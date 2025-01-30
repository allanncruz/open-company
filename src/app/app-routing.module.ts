import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterCompanyComponent } from './pages/register-company/register-company.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Pedido de Abertura de empresas' } },
  {
    path: 'solicitar-abertura',
    component: RegisterCompanyComponent,
    data: { title: 'Solicitar Abertura de empresas' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
