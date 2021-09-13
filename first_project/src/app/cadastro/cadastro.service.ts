import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private httpClient: HttpClient) { }

  cadastrar(email: string, name: string, usuario: string, senha: string): Observable<any> {
    return this.httpClient.post('http://localhost:3000/user/signup', {
      email: email,
      fullName: name,
      userName: usuario,
      password: senha
    });
  }
}
