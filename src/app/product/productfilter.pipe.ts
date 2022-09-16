import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productfilter'
})
export class ProductfilterPipe implements PipeTransform {

  transform(value: Product[], filterText?: any): Product[] {

    filterText = filterText?filterText.toLocaleLowerCase():null/**filtertext var mı varsa hepsini küçük harfe çevir.yoksa bir şey yapma. */

    return filterText ?value.filter((p:Product)=>p.name.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }//datayı değiştiren kısım

}
