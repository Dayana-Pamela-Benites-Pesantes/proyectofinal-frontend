import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProductoService } from "../../../services/producto.service";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  
  dsplayedColums :string[] = ['id','nombre','stock','precio','categoria','marca','fechaVencimiento','actions'];
  productoDataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  constructor(
    private productoService:ProductoService,
    private router:Router,
    private activatedRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
  this.getProducto();
  }
  getProducto(): void{
    this.productoService.getAll().subscribe(listProducto =>{
      console.log('productos: ',listProducto);

      this.productoDataSource = listProducto;
      console.log(this.productoDataSource);
    })
  }
  back():void{
    this.router.navigate(['..'],{
      relativeTo:this.activatedRouter
    })
  }
  
  
 editarProducto(producto: any):void{
    this.router.navigate(['./update/',producto.id],{
    relativeTo: this.activatedRouter
  })
   
 }
  

 deleteProducto(producto: any):void{
      this.productoService.delete(producto.id).subscribe(x=>{
     alert('Se elimino correctamente');  
      this.getProducto();
  
    })
  }
 agregarProducto(): void{
    this.router.navigate(['./create'],{
     relativeTo: this.activatedRouter
    })
  }
}
