import { NgFor, NgIf } from "@angular/common";
import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";
import { InputSearchComponent } from "@components/input-search/input-search.component";
import { MobileMenuComponent } from "@components/mobile-menu/mobile-menu.component";
import { NAV_LIST } from "src/app/core/constants/common.constant";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
    standalone: true,
    imports: [NgFor, InputSearchComponent, MobileMenuComponent],
})
export class HeaderComponent {
    private router = inject(Router);

    readonly NAV_LIST = NAV_LIST;
    public isMenuOpen: boolean = false;

    public onRedirectList() {
        this.router.navigate(["/"]).then();
    }

    public toggleMobileMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }

    public closeMobileMenu() {
        this.isMenuOpen = false;
    }
}
