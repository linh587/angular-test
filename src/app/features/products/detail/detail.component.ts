import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PopularProductComponent } from "@features/products/detail/components/popular-product/popular-product.component";
import { RelatedProductComponent } from "@features/products/detail/components/related-product/related-product.component";
import { Product } from "@models/product.model";
import { FormatPricePipe } from "@pipes/format-price.pipe";
import { ProductService } from "@services/product.service";
import {
    MOCK_SIZE_LIST,
    MOCK_THUMB_LIST,
} from "src/app/core/constants/common.constant";
import { DetailTabComponent } from "./components/detail-tab/detail-tab.component";

@Component({
    selector: "app-detail",
    templateUrl: "./detail.component.html",
    styleUrls: ["./detail.component.scss"],
    standalone: true,
    imports: [
        CommonModule,
        FormatPricePipe,
        RelatedProductComponent,
        PopularProductComponent,
        DetailTabComponent,
    ],
})
export class DetailComponent implements OnInit {
    private route = inject(ActivatedRoute);
    private router = inject(Router);
    private productService = inject(ProductService);

    public MOCK_THUMB_LIST = MOCK_THUMB_LIST;
    public MOCK_SIZE_LIST = MOCK_SIZE_LIST;
    public product?: Product;

    ngOnInit() {
        this.getProductDetail();
    }

    private getProductDetail() {
        const id = Number(this.route.snapshot.paramMap.get("id"));
        this.productService
            .getProductById(id)
            .subscribe((p) => (this.product = p));
    }

    public back() {
        this.router.navigate(["/products"]).then();
    }
}
