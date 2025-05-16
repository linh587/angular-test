import { Routes } from "@angular/router";

export const productRoutes: Routes = [
    {
        path: "",
        pathMatch: "full",
        loadComponent: () =>
            import("./list/list.component").then((m) => m.ListComponent),
    },
    {
        path: ":id",
        pathMatch: "full",
        loadComponent: () =>
            import("./detail/detail.component").then((m) => m.DetailComponent),
    },
];
