import { NgIf } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Product } from "@models/product.model";
import { FormatPricePipe } from "@pipes/format-price.pipe";

@Component({
    selector: "product-card",
    templateUrl: "./product-card.component.html",
    styleUrls: ["./product-card.component.scss"],
    standalone: true,
    imports: [FormatPricePipe, RouterModule, NgIf],
})
export class ProductCardComponent {
    @Input() product!: Product;
    @Output() directDetailEvent = new EventEmitter();

    onRedirectDetail(id: number) {
        this.directDetailEvent.emit(id);
    }
}
