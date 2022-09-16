import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Product } from '../product/product';
import { tap } from 'rxjs/operators'
@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }
  path = "http://localhost:3000/products";

  getProducts(categoryId): Observable<Product[]> {
    let newPath = this.path;
    if (categoryId) {
      newPath = newPath + "?categoryId=" + categoryId
    }
    // alert(categoryId)
    return this.http.get<Product[]>(newPath).pipe(
      //Hata yakalama

      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );

  }
  addProduct(product: Product): Observable<Product> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token'
      })
    }
    return this.http.post<Product>(this.path, product, httpOptions).pipe(

      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );


  }

  handleError(err: HttpErrorResponse) {
    let errorMessage = "";
    if (err.error instanceof ErrorEvent) {
      errorMessage = 'Bir hata oluştu' + err.error.message
    }
    else { errorMessage = 'Sistemsel bir hata' }

    return throwError(() => new Error(errorMessage))
  }
}
