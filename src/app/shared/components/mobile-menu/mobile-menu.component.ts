import { NgFor, NgIf } from "@angular/common";
import { Component, EventEmitter, inject, Input, Output } from "@angular/core";
import { Router } from "@angular/router";
import { NAV_LIST } from "src/app/core/constants/common.constant";

@Component({
    selector: "app-mobile-menu",
    templateUrl: "./mobile-menu.component.html",
    styleUrls: ["./mobile-menu.component.scss"],
    standalone: true,
    imports: [NgIf, NgFor],
})
export class MobileMenuComponent {
    private router = inject(Router);

    @Input() isOpen = false;
    @Output() closedEvent = new EventEmitter();

    readonly NAV_LIST = NAV_LIST;

    public handleClose() {
        this.closedEvent.emit();
    }

    public onRedirectList() {
        this.router.navigate(["/"]).then;
    }
}
