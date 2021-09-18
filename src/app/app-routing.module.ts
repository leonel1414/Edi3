import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { PrimerComponenteComponent } from './componentes/primer-componente/primer-componente.component';
import { SegundoComponenteComponent } from './componentes/segundo-componente/segundo-componente.component';
import { ValidadorGuard } from './helpers/validador.guard';

const routes: Routes = [
  { path: 'primerComponente', component: PrimerComponenteComponent, canActivate:[ValidadorGuard] },
  { path: '', component: LoginComponent },
  {path:'segundo',component:SegundoComponenteComponent},
  {path: '**',component:NoEncontradoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
