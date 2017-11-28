import { Component, OnInit } from '@angular/core';
import { ProjetosService } from '../services/projetos.service';

@Component({
  selector: 'app-projetos-lista',
  templateUrl: './projetos-lista.component.html',
  styleUrls: ['./projetos-lista.component.css'],
  providers: [ProjetosService]
})
export class ProjetosListaComponent implements OnInit {

  private projetos : any;

  constructor(private service: ProjetosService) { }

  ngOnInit() {
    this.atualizarLista();
  }

  atualizarLista() {
    this.service.listarTodos().subscribe(dados => this.projetos = dados)
  }

  excluir(id: string) {    
    if(confirm('Deseja realmente excluir este projeto?')) {
      this.service.excluir(id).subscribe(
        () => this.atualizarLista(),
        erro => console.error(erro)
      )
    }
  }

}
