import { Routes } from "@angular/router";
import { productRoutes } from "@features/products/product.routes";

export const routes: Routes = [
    { path: "", redirectTo: "products", pathMatch: "full" },
    {
        path: "products",
        children: productRoutes,
    },
];
