import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';
declare let alertify: any;
import { HttpClient } from '@angular/common/http'; //http client komponente yazılması doğru değil..
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  // providers:[AlertifyService]//Local servis
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  constructor(
    private alertifyServices: AlertifyService, 
    private productService: ProductService, 
    private http: HttpClient,
    private activedRoute:ActivatedRoute) { }
  
  title = "List of Products"
  filterText = ""
  //globale taşımak için
   products: Product[];// = [ //any olunca her şey olabiliri o yüzden güvenli bir array olmuyor.

  //   { id: 1, name: "Laptop", price: 2500, categoryId: 1, description: "Asus Zenbook", imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" },
  //   { id: 2, name: "Mouse", price: 2500, categoryId: 2, description: "Asus Zenbook", imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" },
  //   { id: 1, name: "Laptop", price: 2500, categoryId: 1, description: "Asus Zenbook", imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" },
  //   { id: 2, name: "Mouse", price: 2500, categoryId: 2, description: "Asus Zenbook", imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" },
  //   { id: 1, name: "Laptop", price: 2500, categoryId: 1, description: "Asus Zenbook", imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" },
  //   { id: 2, name: "Mouse", price: 2500, categoryId: 2, description: "Asus Zenbook", imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" }


  // ]

  // path = "http://localhost:3000/products"
  
  ngOnInit() {//Datanın product olduğunu bildir.

    this.activedRoute.params.subscribe(params=>{
      this.productService.getProducts(params["categoryId"]).subscribe(data => { this.products = data });
    })

    // this.http.get<Product[]>(" http://localhost:3000/products").subscribe(data => {
    //   this.products = data})

    //   // globale taşımak için
    //   this.http.get<Product[]>(this.path).subscribe(data => {
    //     this.products = data


    //   });

      
    }

  addToCart(product){

      // alert("Sepete eklendi:"+" "+product.name)
      // alertify.success(product.name+" "+"Sepete eklendi")
      this.alertifyServices.success(product.name + " " + "added to cart")
    }
}
