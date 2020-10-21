import { Component, OnInit, Input } from '@angular/core';
import { Livro } from '../livros.model';
@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {


  @Input() livros: Livro[] = [];
  // livros = [
  //   {
  //   id: '1',
  //   titulo: 'Almondegaas',
  //   autor: 'Suecão',
  //   numeroPagina: '60',
  //   },
  //   {
  //     id: '2',
  //     titulo: 'Sr Suino',
  //     autor: 'Hamiltão',
  //     numeroPagina: '120',
  //   },
  //   ];

  constructor() { }

  ngOnInit(): void {
  }

}
