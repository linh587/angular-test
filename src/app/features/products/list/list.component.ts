import { Component, inject, OnInit } from "@angular/core";
import { ProductService } from "../../../core/services/product.service";
import { Product } from "../../../core/models/product.model";
import { FormsModule } from "@angular/forms";
import { CommonModule, NgFor } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ProductCardComponent } from "../../../shared/components/product-card/product-card.component";

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

    products: Product[] = [];
    searchTerm: string = "";

    ngOnInit() {
        this.productService
            .getProducts()
            .subscribe((data) => (this.products = data));
    }

    get filteredProducts(): Product[] {
        return this.products.filter((p) =>
            p.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
    }
}
