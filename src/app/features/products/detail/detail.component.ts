import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "@services/product.service";
import { map, Observable, switchMap } from "rxjs";
import {
    MOCK_SIZE_LIST,
    MOCK_THUMB_LIST,
} from "src/app/core/constants/common.constant";
import { PopularProductComponent } from "./components/popular-product/popular-product.component";
import { RelatedProductComponent } from "./components/related-product/related-product.component";
import { DetailTabComponent } from "./components/detail-tab/detail-tab.component";
import { Product } from "@models/product.model";

@Component({
    selector: "app-detail",
    templateUrl: "./detail.component.html",
    styleUrls: ["./detail.component.scss"],
    standalone: true,
    imports: [
        CommonModule,
        RelatedProductComponent,
        PopularProductComponent,
        DetailTabComponent,
    ],
})
export class DetailComponent {
    private route = inject(ActivatedRoute);
    private router = inject(Router);
    private productService = inject(ProductService);

    //
    readonly MOCK_THUMB_LIST = MOCK_THUMB_LIST;
    readonly MOCK_SIZE_LIST = MOCK_SIZE_LIST;

    //
    public product$: Observable<Product | undefined> = this.route.paramMap.pipe(
        map((params) => Number(params.get("id"))),
        switchMap((id) => this.productService.getProductById(id))
    );

    public back() {
        this.router.navigate(["/products"]).then();
    }
}
