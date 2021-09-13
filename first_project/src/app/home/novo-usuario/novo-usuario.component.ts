import { CadastroService } from './../../cadastro/cadastro.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  email = '';
  nome = '';
  usuario = '';
  senha = '';

  constructor(private cadastroService: CadastroService, private router: Router) { }

  ngOnInit(): void {
  }

  cadastrar() {
    this.cadastroService.cadastrar(this.email, this.nome, this.usuario, this.senha).subscribe(
      () => {
        this.router.navigate(['animais']);
      },
      (error) => {
        alert('Erro ao se cadatrar!');
        console.error(error);
      }
    );
  }
}
