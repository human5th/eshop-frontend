import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit,OnDestroy {
  currentProduct:any
  routeSub:any
  constructor(private productService:ProductsService, private route: ActivatedRoute) {

  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
  getStars(value) {
    if (value=='fill') {
      const element = [];
      for (let index = 0; index < this.currentProduct.rating; index++) {
        element.push(index)
      }
      return element
    } else {
      const element = [];
      for (let index = 0; index < 5-this.currentProduct.rating; index++) {
        element.push(index)
      }
      return element
    }
  }
  async ngOnInit() {
    this.routeSub = this.route.params.subscribe(async params => {
      //console.log(params) //log the entire params object
      (await this.productService.getToProductById(params['id'])).subscribe(res=>{
        console.log(res)
        this.currentProduct = res
      })
    });

  }

}
