import { ClienteService } from './../services/cliente.service';
import { CLIENTES } from './clientes.json';
import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import Swal from 'sweetalert2';

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

  delete(cliente: Cliente):void {
    Swal.fire({
      title: 'Esta seguro?',
      text: `Seguro que desea eliminar al cliente ${cliente.nombre} ${cliente.apellido}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.servicioClientes.delete(cliente.id).subscribe(
          response => {
            this.clientes = this.clientes.filter(cli => cli !==cliente)
            Swal.fire(
              'Cliente Eliminado!',
              'Eliminación exitosa',
              'success'
            )
          }
        )
      }
    })
  }

}
