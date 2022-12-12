import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order_Material } from 'src/app/models/order_material.model';
import { OrderMaterialService } from 'src/app/services/order-material.service';

@Component({
  selector: 'app-order-material-add',
  templateUrl: './order-material-add.component.html',
  styleUrls: ['./order-material-add.component.css']
})
export class OrderMaterialAddComponent implements OnInit {

  addOrder_MaterialRequest: Order_Material={
    orderid:'',
    materialid:'',
    quantity:0,
    

  }
  constructor(private order_materialList:OrderMaterialService, private router:Router) { }

  ngOnInit(): void {
  
   
  }
  addOrder_MaterialType(){
    this.order_materialList.addOrder_Material(this.addOrder_MaterialRequest).subscribe({
      next:(order_material)=>{
        this.router.navigate(['menu']);
      }
    })  }
}
