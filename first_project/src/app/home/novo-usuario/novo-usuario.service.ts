import { Observable } from 'rxjs';
import { NovoUsuario } from './novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private http: HttpClient) { }

  cadastarNovoUsuario(novoUsuario: NovoUsuario): Observable<any> {
    return this.http.post('http://localhost:3000/user/singup', novoUsuario);
  }
}
