import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {EventosService} from "../eventos.service";
import {Evento} from "../evento.model";

@Component({
  selector: 'app-listar-evento',
  templateUrl: './listar-evento.component.html',
  styles: []
})
export class ListarEventoComponent implements OnInit {
  eventos = null;
  status = 'carregando';

  constructor(private eventosService: EventosService, private router: Router) {
  }

  ngOnInit(): void {
    this.atualizarLista();
  }

  atualizarLista() {
    this.eventosService.todas()
      .subscribe(eventos => {
        this.eventos = eventos;
        this.status = null;
      }, erro => {
        if (erro.status == 0) {
          this.status = 'erro-conexao';
        } else {
          this.status = 'erro';
        }
      });
  }

  excluir(evento) {
    if (confirm('Tem certeza que deseja excluir o evento "' + evento.nome + '"?')) {
      this.status = 'excluindo';
      this.eventosService.excluir(evento)
        .subscribe(() => {
            this.atualizarLista();
            this.status = 'excluir_ok';
          },
          erro => {
            if (erro.status == 0) {
              this.status = 'erro-conexao';
            } else {
              this.status = 'excluir_erro';
            }
          });
    }
  }

  editar(evento) {
    this.router.navigate(['evento', evento.id]);
  }
}