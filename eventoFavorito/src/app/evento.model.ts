export class Evento {
    id: number;
    sigla: string;
    nome: string;
    dataInicio: string;
    dataTermino: string;
    prazo: string;
    URL: string;
  
    constructor(id: number, sigla: string, nome: string, dataInicio: string, dataTermino: string, prazo: string, URL: string) {
      this.id = id;
      this.sigla = sigla;
      this.nome = nome;
      this.dataInicio = dataInicio;
      this.dataTermino = dataTermino;
      this.prazo = prazo;
      this.URL = URL;
    }
  }