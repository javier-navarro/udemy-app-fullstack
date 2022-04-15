import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {

  constructor() { }

  public listaCurso: string[] = ['typescript', 'javascript', 'Java SE', 'phyton','react'];
  public habilitado:boolean = true;

  ngOnInit(): void {
  }

  public setHabilitar (): void{
    this.habilitado = !this.habilitado;
  }

}
