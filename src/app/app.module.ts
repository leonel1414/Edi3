import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LoginComponent } from './componentes/login/login.component';
import { ProductosComponent} from './componentes/productos/productos.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrdenarPipe } from './pipes/ordenar.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ProductosComponent,
    RegistrarComponent,
    OrdenarPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }