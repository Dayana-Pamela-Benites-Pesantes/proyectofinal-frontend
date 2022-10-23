import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductoService} from "../../../services/producto.service";
import {ActivatedRoute, Router} from "@angular/router";
import { formatDate } from '@angular/common';
import { DatePipe } from '@angular/common';

import { __values } from 'tslib';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
  providers:[
    DatePipe
  ]
  
})
export class UpdateComponent implements OnInit {
  id:number=0;
  formProducto: FormGroup;
  categoria: any[] = [];
  marca: any[] = [];//
 // dataPipe:date='';
  //date:'yyyy-MM-dd';
  //value = "yyyy-MM-dd";
  //Setvalue(producto.fechaVencimiento | date "yyyy-MM-dd");
  //fechaVencimiento=(fechaVencimiento | date:'yyyy-MM-dd');
  
  constructor(
    public formBuilder: FormBuilder,
    private productoService: ProductoService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private dataPipe: DatePipe
  ) {
    this.formProducto = formBuilder.group({
      id: [{value:null,disabled:false},[Validators.required]],
      nombre: [{value: null, disabled: false}, [Validators.required]],
      stock: [{value: null, disabled: false}, [Validators.required]],
      precio: [{value: null, disabled: false}, [Validators.required]],
      idCategoria: [{value: null, disabled: false}, [Validators.required]],
      idMarca: [{value: null, disabled: false}, [Validators.required]],
      fechaVencimiento:[{value: null , disabled: false}, [Validators.required]],
    })
   }
      
  ngOnInit(): void {
    
    this.productoService.getCategoria().subscribe(categoria => {
      this.categoria = categoria;
    }),
    this.productoService.getMarca().subscribe(marca => {
      this.marca = marca;
    }),
    
    this.id=this.activatedRouter.snapshot.params['id'];
    this.getProducto();
    
    
  }
  getProducto(): void{
   // var datePipe = new DatePipe();
   // this.setDob = datePipe.transform(fechaVencimiento, 'dd/MM/yyyy');
    this.productoService.getByid(this.id).subscribe(producto =>{
      console.log(producto)
      this.formProducto.controls['id'].setValue(producto.id);
      this.formProducto.controls['nombre'].setValue(producto.nombre); 
      this.formProducto.controls['stock'].setValue(producto.stock);
      this.formProducto.controls['precio'].setValue(producto.precio);
      this.formProducto.controls['idCategoria'].setValue(producto.idCategoria); 
      this.formProducto.controls['idMarca'].setValue(producto.idMarca); 
      //this.formProducto.controls['fechaVencimiento'].setValue(producto.fechaVencimiento); 
      this.formProducto.controls['fechaVencimiento'].setValue(this.dataPipe.transform(producto.fechaVencimiento, 'yyyy-MM-dd')); 
    })
  }
  cancelar():void{
    this.back();
  }
  back():void{
    this.router.navigate(['/producto'],{
      relativeTo:this.activatedRouter
    })
  }
  modificar():void{
    const producto = this.formProducto.getRawValue();
    console.log(producto)
    this.productoService.update(producto).subscribe(x=>{
      alert('Se creo correctamente');
      this.back();
    })
    
  }
    

}
