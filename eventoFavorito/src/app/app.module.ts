import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { ListaDeEventoComponent } from './lista-de-evento/lista-de-evento.component';
import { EditorDeDisciplinaComponent } from './editor-de-disciplina/editor-de-disciplina.component';
import { HttpClientModule } from '@angular/common/http';
import { EventosService } from './eventos.service';

const appRoutes: Routes = [
  //{path: 'disciplinas', component: ListaDeDisciplinasComponent},
  //{path: 'disciplinas/:id', component: EditorDeDisciplinaComponent},
  //{path: '', component: HomeComponent,},
  //{path: '**', component: PaginaNaoEncontradaComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaginaNaoEncontradaComponent,
    ListaDeEventoComponent,
    EditorDeDisciplinaComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EventosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
