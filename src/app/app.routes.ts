import { Routes } from "@angular/router";
import { HomeComponent } from "./features/home/home.component";
import { productRoutes } from "./features/products/product.routes";

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "products", children: productRoutes },
];
