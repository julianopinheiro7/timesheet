import { Component, OnInit } from '@angular/core';
import { ProjetosService, Projetos } from '../services/projetos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projetos-form',
  templateUrl: './projetos-form.component.html',
  styleUrls: ['./projetos-form.component.css'],
  providers: [ProjetosService]
})
export class ProjetosFormComponent implements OnInit {

  private model: Projetos = new Projetos();
  private id: string;

  constructor(
    private pr: ProjetosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    
    this.route.params.subscribe(
      params => {
        if (params['id']) {
          this.id = params['id'];

          this.pr.obterporID(this.id).subscribe(
            (t: Projetos) => this.model = t
          )
        }
      }
    )
  }

  enviar() {
        
    let roteador = this.router;
    this.pr.salvar(this.model).subscribe(
      function (dados) {
        document.getElementById('sucess').style.display="block";    
      },
      function (erro) {
        document.getElementById('fail').style.display="block";
      }
    )
  }
    
}
