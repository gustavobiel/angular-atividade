import { Component } from '@angular/core';
import { Livro } from './livros/livros.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-atividade';
  livros: Livro[] = [];
  onLivroAdicionado(livro) {
    this.livros = [...this.livros, livro];
    }
}
