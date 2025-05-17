import { Injectable } from "@angular/core";
import { Product } from "@models/product.model";
import { removeVietnameseTones } from "@utils/remove-tones.util";
import { map, Observable, of } from "rxjs";
import { PRODUCTS } from "../mocks/product.data";

@Injectable({
    providedIn: "root",
})
export class ProductService {
    public getProducts(): Observable<Product[]> {
        return of(PRODUCTS);
    }

    public getProductById(id: number): Observable<Product | undefined> {
        return of(PRODUCTS.find((p) => p.id === id));
    }

    public searchProductsByName(name: string): Observable<Product[]> {
        const productName = removeVietnameseTones(name.trim().toLowerCase());
        return this.getProducts().pipe(
            map((products) =>
                products.filter((p) =>
                    removeVietnameseTones(p.name.toLowerCase()).includes(
                        productName
                    )
                )
            )
        );
    }
}
