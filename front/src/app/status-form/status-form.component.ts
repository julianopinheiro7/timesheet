import { Component, OnInit } from '@angular/core';
import { StatusService, Status } from '../services/status.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-status-form',
  templateUrl: './status-form.component.html',
  styleUrls: ['./status-form.component.css'],
  providers: [StatusService]
})

export class StatusFormComponent implements OnInit {

  private title = 'Novo Status'
  private model: Status = new Status()
  private id: string

  constructor(
    private st: StatusService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.route.params.subscribe(
      params => {
        if (params['id']) {
          this.id = params['id'];

          this.st.obterporID(this.id).subscribe(
            (t: Status) => this.model = t
          )
        }
      }
    )
  }

  enviar() {
    
    let roteador = this.router;
    this.st.salvar(this.model).subscribe(
      function (dados) {
        console.log(dados)
        roteador.navigate(['/status']);
      },
      function (erro) {
        //
      }
    )
  }

}
