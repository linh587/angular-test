import { NgFor } from "@angular/common";
import { Component, HostListener, inject } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
    standalone: true,
    imports: [NgFor],
})
export class HeaderComponent {
    public router = inject(Router);

    NAV_LIST = [
        "Trang chủ",
        "Danh mục",
        "Sản phẩm",
        "Giới thiệu",
        "Khuyến mãi",
    ];
    public menuFixed: boolean = false;

    @HostListener("window:scroll") onWindowScroll() {
        window.scrollY > 165
            ? (this.menuFixed = true)
            : (this.menuFixed = false);
    }
}
