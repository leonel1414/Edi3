import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimerComponenteComponent } from './componentes/primer-componente/primer-componente.component';

const routes: Routes = [
  {path:'primerComponente',component:PrimerComponenteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
