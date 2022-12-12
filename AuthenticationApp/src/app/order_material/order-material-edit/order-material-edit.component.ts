import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order_Material } from 'src/app/models/order_material.model';
import { OrderMaterialService } from 'src/app/services/order-material.service';

@Component({
  selector: 'app-order-material-edit',
  templateUrl: './order-material-edit.component.html',
  styleUrls: ['./order-material-edit.component.css']
})
export class OrderMaterialEditComponent implements OnInit {
  addOrder_MaterialRequest: Order_Material={
    orderid:'',
    materialid:'',
    quantity:0,

  }
  constructor(private order_materialList:OrderMaterialService, private router:Router, private route: ActivatedRoute,) { }
  ngOnInit(): void {
    
    this.route.paramMap.subscribe({
      next: (params)=>{
    const id=params.get('id');

    if(id){
      this.order_materialList.getOrder_Material(id).subscribe({
        next:(response)=>{
this.addOrder_MaterialRequest=response;
        }
      });
    }
      }
    })
  }
    updateOrder_Material(id:string){
      this.order_materialList.updateOrder_Material(this.addOrder_MaterialRequest.orderid,this.addOrder_MaterialRequest).subscribe({
        next:(response)=>{
          this.router.navigate(['offers']);
        }
      });
    }
  
  }


