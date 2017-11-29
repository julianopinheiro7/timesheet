import { Component, OnInit } from '@angular/core';
import { UsuariosService, Usuarios } from '../services/usuarios.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.css'],
  providers: [UsuariosService]
})
export class UsuariosFormComponent implements OnInit {

  private model: Usuarios = new Usuarios();
  private id: string;

  constructor(
    private us: UsuariosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.route.params.subscribe(
      params => {
        if (params['id']) {
          this.id = params['id'];

          this.us.obterporID(this.id).subscribe(
            (t: Usuarios) => this.model = t
          )
        }
      }
    )
  }

  enviar() {

    let roteador = this.router;
    this.us.salvar(this.model).subscribe(
      function (dados) {
        console.log(dados)
        // roteador.navigate(['/usuarios']);        
      },
      function (erro) {
        //
      }
    )
  }

}
