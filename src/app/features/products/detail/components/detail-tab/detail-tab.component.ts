import { Component, Input } from "@angular/core";
import { Product } from "@models/product.model";

@Component({
    selector: "app-detail-tab",
    templateUrl: "./detail-tab.component.html",
    styleUrls: ["./detail-tab.component.scss"],
    standalone: true,
})
export class DetailTabComponent {
    @Input() product!: Product | undefined | null;
}
