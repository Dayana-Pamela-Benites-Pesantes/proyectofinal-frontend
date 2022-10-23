import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductoService} from "../../../services/producto.service";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  formProducto: FormGroup;
  categoria: any[] = [];
  marca: any[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private productoService: ProductoService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) { 
    this.formProducto = formBuilder.group({
      nombre: [{value: null, disabled: false}, [Validators.required]],
      stock: [{value: null, disabled: false}, [Validators.required]],
      precio: [{value: null, disabled: false}, [Validators.required]],
      idCategoria: [{value: null, disabled: false}, [Validators.required]],
      idMarca: [{value: null, disabled: false}, [Validators.required]],
      fechaVencimiento: [{value: null, disabled: false}, [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.productoService.getCategoria().subscribe(categoria => {
      this.categoria = categoria;
    }),
    this.productoService.getMarca().subscribe(marca => {
      this.marca = marca;
    })
  }
  cancelar(): void {
    this.back();
  }

  back(): void {
    this.router.navigate(['..'], {
      relativeTo: this.activatedRouter
    })
  }

  guardar(): void {
    const producto = this.formProducto.getRawValue();
    this.productoService.create(producto).subscribe(x => {
      alert('Se creo correctamente');
      this.back();
    })
  }

}
