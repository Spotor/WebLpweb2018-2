import {Injectable} from '@angular/core';
import {Evento} from './evento.model';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EventosService {
  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  todas() {
    return this.http.get(this.API_URL + '/eventos');
  }

  salvar(id: number, sigla: string, nome: string, dataInicio: string, dataTermino: string,  prazo: string,   URL: string) {
    const evento = {sigla: sigla, nome: nome, dataInicio: dataInicio, dataTermino: dataTermino,  prazo: prazo,   URL: URL};
    if (id) {
      return this.http.patch(this.API_URL + '/eventos/' + id, evento);
    } else {
      return this.http.post(this.API_URL + '/eventos', evento);
    }
  }

  excluir(evento: number | Evento) {
    let id;
    if (typeof(evento) === 'number') {
      id = evento;
    } else {
      id = evento.id;
    }
    return this.http.delete(this.API_URL + '/eventos/' + id);
  }

  encontrar(en: number) {
    return this.http.get(this.API_URL + '/eventos/' + en);
  }
}