import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { ListarEventoComponent } from './listar-evento/listar-evento.component';
import { CadastrarEventoComponent } from './cadastrar-evento/cadastrar-evento.component';
import {HomeComponent} from './home/home.component';
import {PaginaNooEncontradaComponent} from './pagina-noo-encontrada/pagina-noo-encontrada.component';

const routes: Routes = [
    {path: 'eventos', component: ListarEventoComponent},
    {path: 'cadastar/evento/:id', component: CadastrarEventoComponent},
    {path: '', component: HomeComponent,},
    {path: '**', component: PaginaNooEncontradaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
