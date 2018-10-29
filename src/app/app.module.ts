import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarEventoComponent } from './listar-evento/listar-evento.component';
import { CadastrarEventoComponent } from './cadastrar-evento/cadastrar-evento.component';
import { PaginaNooEncontradaComponent } from './pagina-noo-encontrada/pagina-noo-encontrada.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarEventoComponent,
    CadastrarEventoComponent,
    PaginaNooEncontradaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
