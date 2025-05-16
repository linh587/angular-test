import { NgFor } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { ProductCardComponent } from "@components/product-card/product-card.component";
import { Product } from "@models/product.model";
import { ProductService } from "@services/product.service";

@Component({
    selector: "app-related-product",
    templateUrl: "./related-product.component.html",
    styleUrls: ["./related-product.component.scss"],
    standalone: true,
    imports: [NgFor, ProductCardComponent],
})
export class RelatedProductComponent implements OnInit {
    private productService = inject(ProductService);

    public products: Product[] = [];

    ngOnInit(): void {
        this.getListProduct();
    }

    private getListProduct() {
        this.productService.getProducts().subscribe((data) => {
            this.products = data.slice(0, 4);
        });
    }
}
