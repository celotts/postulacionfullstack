import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CuentasComponent } from './cuentas/cuentas.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: CuentasComponent },
  { path: 'cuenta', component: CuentasComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
