import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { CategoryService } from '../services/category.service';
import { Category } from './category';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService:CategoryService) { }
  title = "Category List";
  categories:Category[];
  
  
  // Category[] = [
  //   { id: 1,name:"Elektronik" },
  //   { id: 2,name:"Bilgisayar" },
  //   { id: 3,name:"Beyaz Eşya" },
  //   { id: 4,name:"Elektronik" },
  //   { id: 5,name:"Elektronik" }

  //  ]
  ngOnInit(){
    this.categoryService.getCategories().subscribe(data=>{this.categories=data});
  }

}
