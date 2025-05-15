import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { PRODUCTS } from "../mocks/product.data";
import { Product } from "../models/product.model";

@Injectable({
    providedIn: "root",
})
export class ProductService {
    getProducts(): Observable<Product[]> {
        return of(PRODUCTS);
    }

    getProductById(id: number): Observable<Product | undefined> {
        return of(PRODUCTS.find((p) => p.id === id));
    }
}
