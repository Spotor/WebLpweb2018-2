import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Evento} from '../evento.model';
import {ActivatedRoute, Router} from '@angular/router';
import {EventosService} from "../eventos.service";

@Component({
  selector: 'app-cadastrar-evento',
  templateUrl: './cadastrar-evento.component.html',
  styles: []
})
export class CadastrarEventoComponent implements OnInit {
  evento: any = new Evento(null, null, null, null, null, null, null);
  status = 'carregando';

  constructor(private route: ActivatedRoute,
    private router: Router,
    private eventosService: EventosService) {
}

ngOnInit() {
  const id = this.route.snapshot.paramMap.get('id');
  if (id == 'cadastrar') {
    this.evento = new Evento(null, null, null, null, null, null, null);
    this.status = null;
  } else {
    this.eventosService.encontrar(parseInt(id))
      .subscribe(
        evento => {
          this.evento = evento;
          this.status = null;
        },
        erro => {
          if (erro.status == 404) {
            this.router.navigate(['evento-nao-encontrado']);
          }
          if (erro.status == 0) {
            this.evento = new Evento(null, null, null, null, null , null, null);
            this.status = 'erro-conexao';
          }
        });
  }
}

salvar() {
  this.status = 'salvando';
  this.eventosService.salvar(this.evento.id, this.evento.sigla ,this.evento.nome, this.evento.dataInicio, this.evento.dataFim, this.evento.prazo, this.evento.URL)
    .subscribe(() => {
        this.status = 'salvo';
        if (this.evento.id != this.route.snapshot.paramMap.get('id')) {
          this.evento = new Evento(null, null, null, null, null , null, null);
        }
      },
      () => {
        this.status = 'erro';
      });
}

cadastrar() {
  this.status = null;
}

cancelar() {
  this.router.navigate(['evento']);
}

}