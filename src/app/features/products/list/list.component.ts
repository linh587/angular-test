import { CommonModule, NgFor } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { ProductCardComponent } from "@components/product-card/product-card.component";
import { Product } from "@models/product.model";
import { ProductService } from "@services/product.service";
import { map, Observable, switchMap } from "rxjs";
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
export class ListComponent {
    private productService = inject(ProductService);
    private router = inject(Router);
    private route = inject(ActivatedRoute);

    readonly SORT_LIST = SORT_LIST;

    public searchTerm: string = "";

    //
    public products$: Observable<Product[]> = this.route.queryParamMap.pipe(
        map((params) => params.get("name")?.toLowerCase() || ""),
        switchMap((name) => this.productService.searchProductsByName(name))
    );

    public handleRedirectDetail(productId: number) {
        this.router.navigate([`/products/${productId}`]).then();
    }
}
