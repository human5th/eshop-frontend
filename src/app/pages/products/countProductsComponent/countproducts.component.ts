import { Component } from "@angular/core";
import { ProductsService } from "src/app/services/products.service";

@Component({
    templateUrl: './countproducts.component.html',
    selector: 'app-countproducts'
})

export class CountProductsComponent {
    productsCount: any; 
    constructor(private productService: ProductsService) {}
    async ngOnInit() {

        (await this.productService.getProductsCount()).toPromise().then(res => {
            this.productsCount = res
        })

    }
}