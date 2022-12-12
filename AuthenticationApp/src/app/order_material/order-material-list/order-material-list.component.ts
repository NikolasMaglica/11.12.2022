import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order_Material } from 'src/app/models/order_material.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-material-list',
  templateUrl: './order-material-list.component.html',
  styleUrls: ['./order-material-list.component.css']
})
export class OrderMaterialListComponent implements OnInit {

  Order_Material$!:Observable<any[]>;
  
  addOrder_MaterialRequest: Order_Material={
    orderid:'',
    materialid:'',
    quantity:0,
    

  }
  order_material:any=[];
   
  
  constructor(private order_materialList:OrderService, private router:Router) { }

  ngOnInit(): void {
    this.Order_Material$=this.order_materialList.getAllOrders();
this.order_materialList.getAllOrders().subscribe({
  next:(order_material)=>{
    this.order_material=order_material;
  },
  error:(response)=>{
    console.log(response);
  }
});
  }
  delete(item:any) {
    if(confirm(`Želite li izbrisati ponudu  pod rednim brojem ${item.id} ?`)) {
      this.order_materialList.deleteOrder(item.id).subscribe(res => {
        
      this.Order_Material$ = this.order_materialList.getAllOrders();
      })
    }
  }

}
