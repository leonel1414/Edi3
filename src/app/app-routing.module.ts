import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { ProductosComponent} from './componentes/productos/productos.component';
import { HeaderComponent } from './componentes/header/header.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { GuardGuard } from './guard/guard.guard';

const routes: Routes = [
  {path: "producto", component: ProductosComponent, canActivate: [GuardGuard], pathMatch:"full"},
  {path: "login", component: LoginComponent, pathMatch:"full"},
  {path: "registrarse", component: RegistrarComponent, pathMatch:"full"},
  {path: "**", redirectTo: '/404'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }