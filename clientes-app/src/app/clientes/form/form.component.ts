import { Cliente } from './../cliente';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public cliente:Cliente = new Cliente();
  public titulo:string = "Crear Cliente";
  constructor(private servicioClientes: ClienteService,
              private router: Router) { }

  ngOnInit(): void {
  }

  public createCliente(): void {
    console.log("creando....");
    console.log(this.cliente);
    this.servicioClientes.create(this.cliente).subscribe(
      response => this.router.navigate(['/clientes'])
    )

  }

}
