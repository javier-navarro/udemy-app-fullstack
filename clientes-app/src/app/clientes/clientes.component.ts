import { ClienteService } from './../services/cliente.service';
import { CLIENTES } from './clientes.json';
import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  public clientes: Cliente[];
  constructor(private servicioClientes: ClienteService) { }


  ngOnInit(): void {
    this.servicioClientes.getClientesMap().subscribe(
      clientes => this.clientes = clientes
    );
  }

}
