import { NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimerComponenteComponent } from './componentes/primer-componente/primer-componente.component';
import { LoginComponent } from './componentes/login/login.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { SegundoComponenteComponent } from './componentes/segundo-componente/segundo-componente.component';



@NgModule({
  declarations: [
    AppComponent,
    PrimerComponenteComponent,
    LoginComponent,
    NoEncontradoComponent,
    MenuComponent,
    SegundoComponenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
