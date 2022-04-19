import { Cliente } from './../cliente';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public cliente:Cliente = new Cliente();
  public titulo:string = "Crear Cliente";
  constructor(private servicioClientes: ClienteService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarCliente();
  }

  public createCliente(): void {
    console.log("creando....");
    console.log(this.cliente);
    this.servicioClientes.create(this.cliente).subscribe(
      response => {this.router.navigate(['/clientes'])
      Swal.fire('Nuevo Cliente', `Cliente ${response.nombre} creado con éxito!`, 'error')
    }, error => {
      Swal.fire('Algo salío mal!', `Error al crear usuario`, 'error')
    }
    )

  }

  public cargarCliente(): void{
    this.activatedRoute.params.subscribe(params=> {
      let id = params['id'];
      if(id){
        this.servicioClientes.getCliente(id).subscribe(
          (cliente)=> this.cliente = cliente
        )
      }
    })
  }

  public update():void{
    this.servicioClientes.update(this.cliente).subscribe(
      (cliente) => {
        this.router.navigate(['/clientes'])
        Swal.fire('Cliente Actualizado', `Cliente ${cliente.nombre} actualizado con éxito!`, 'success')
      }
    )
  }

}
