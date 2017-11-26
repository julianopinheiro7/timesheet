import { OnInit, Component } from '@angular/core';
import { TarefasService, Tarefa } from '../services/tarefas.service'
import { StatusService, Status } from '../services/status.service'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-tarefas-form',
  templateUrl: './tarefas-form.component.html',
  styleUrls: ['./tarefas-form.component.css'],
  providers: [TarefasService, StatusService]
})
export class TarefasFormComponent implements OnInit {

  private title = 'Nova Tarefa'
  private model: Tarefa = new Tarefa()
  private status : any
  private id: string

  constructor(
    private ts: TarefasService,
    private st: StatusService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.status = this.st.listarTodos();

    this.route.params.subscribe(
      params => {
        if (params['id']) {
          this.id = params['id'];

          this.ts.obterporID(this.id).subscribe(
            (t: Tarefa) => this.model = t
          )
        }
      }
    )
  }

  enviar() {
        
    let roteador = this.router;    
    this.ts.salvar(this.model).subscribe(
      function (dados) {
        console.log(dados)
        // roteador.navigate(['/tarefas']);
        alert("Registro salvo com sucesso!");
      },
      function (erro) {
        //
      }
    )
  }
}
