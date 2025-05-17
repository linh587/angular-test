import { CommonModule, NgIf } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Product } from "@models/product.model";

@Component({
    selector: "product-card",
    templateUrl: "./product-card.component.html",
    styleUrls: ["./product-card.component.scss"],
    standalone: true,
    imports: [RouterModule, NgIf, CommonModule],
})
export class ProductCardComponent {
    @Input() product!: Product;
    @Output() directDetailEvent = new EventEmitter();

    public onRedirectDetail(id: number) {
        this.directDetailEvent.emit(id);
    }
}
