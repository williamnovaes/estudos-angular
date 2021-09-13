// import { CadastroService } from './../../cadastro/cadastro.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NovoUsuarioService } from './novo-usuario.service';
import { NovoUsuario } from './novo-usuario';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent implements OnInit {
  //formulario reativo

  novoUsuarioForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService,
    private router: Router
  ) {}

  //ngOnInit é executado apos a classe executar toda costrucao da classe, injetar todos servicos
  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      userName: [''],
      password: ['']
    });
  }

  cadastrar() {
    const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;

  }


    // formulario template driven

  // email = '';
  // nome = '';
  // usuario = '';
  // senha = '';
  // constructor(private cadastroService: CadastroService, private router: Router) { }

  // ngOnInit(): void {
  // }

  // cadastrar() {
  //   this.cadastroService.cadastrar(this.email, this.nome, this.usuario, this.senha).subscribe(
  //     () => {
  //       this.router.navigate(['animais']);
  //     },
  //     (error) => {
  //       alert('Erro ao se cadatrar!');
  //       console.error(error);
  //     }
  //   );
  // }
}
