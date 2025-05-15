import { Routes } from "@angular/router";
import { DetailComponent } from "./detail/detail.component";
import { ListComponent } from "./list/list.component";

export const productRoutes: Routes = [
    { path: "", component: ListComponent },
    { path: ":id", component: DetailComponent },
];
