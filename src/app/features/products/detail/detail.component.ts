import { Component, OnInit } from "@angular/core";
import { Product } from "../../../core/models/product.model";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../../../core/services/product.service";
import { CommonModule, NgIf } from "@angular/common";

@Component({
    selector: "app-detail",
    templateUrl: "./detail.component.html",
    styleUrls: ["./detail.component.scss"],
    standalone: true,
    imports: [NgIf, CommonModule],
})
export class DetailComponent implements OnInit {
    product?: Product;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private productService: ProductService
    ) {}

    ngOnInit() {
        const id = Number(this.route.snapshot.paramMap.get("id"));
        this.productService
            .getProductById(id)
            .subscribe((p) => (this.product = p));
    }

    back() {
        this.router.navigate(["/products"]);
    }
}
