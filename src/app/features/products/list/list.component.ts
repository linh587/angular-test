import { CommonModule, NgFor } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import { ProductCardComponent } from "@components/product-card/product-card.component";
import { Product } from "@models/product.model";
import { ProductService } from "@services/product.service";
import { SORT_LIST } from "src/app/core/constants/common.constant";

@Component({
    selector: "app-list",
    templateUrl: "./list.component.html",
    styleUrls: ["./list.component.scss"],
    standalone: true,
    imports: [
        FormsModule,
        NgFor,
        CommonModule,
        RouterModule,
        ProductCardComponent,
    ],
})
export class ListComponent implements OnInit {
    private productService = inject(ProductService);
    private router = inject(Router);

    public SORT_LIST = SORT_LIST;
    public products: Product[] = [];
    public searchTerm: string = "";

    ngOnInit() {
        this.getListProduct();
    }

    private getListProduct() {
        this.productService.getProducts().subscribe((data) => {
            this.products = data;
        });
    }

    get filteredProducts(): Product[] {
        return this.products.filter((p) =>
            p.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
    }

    public handleRedirectDetail(productId: number) {
        this.router.navigate([`/products/${productId}`]).then();
    }
}
