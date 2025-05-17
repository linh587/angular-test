import { CommonModule, NgIf } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { ReactiveFormsModule, UntypedFormControl } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from "@models/product.model";
import { ProductService } from "@services/product.service";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";

@Component({
    selector: "app-input-search",
    templateUrl: "./input-search.component.html",
    styleUrls: ["./input-search.component.scss"],
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule, NgIf],
})
export class InputSearchComponent implements OnInit {
    private router = inject(Router);
    private route = inject(ActivatedRoute);
    private productService = inject(ProductService);

    public searchTextControl = new UntypedFormControl("");
    public suggestions: Product[] = [];
    public showSuggestion: boolean = false;

    ngOnInit(): void {
        this.patchDefaultValue();
        this.observeInputChange();
    }

    private patchDefaultValue() {
        this.route.queryParamMap.subscribe((params) => {
            const name = params.get("name");
            if (name) {
                this.searchTextControl.setValue(name);
                this.updateSuggestions(name);
            }
        });
    }

    private observeInputChange() {
        this.searchTextControl?.valueChanges
            .pipe(debounceTime(300), distinctUntilChanged())
            .subscribe((value: string) => {
                const query = value?.trim() || "";
                this.updateSuggestions(query);
                this.showSuggestion = !!query;
            });
    }

    private updateSuggestions(value: string) {
        const _value = value.trim();
        if (!_value) {
            this.clearSuggestions();
            return;
        }

        this.productService
            .searchProductsByName(_value)
            .subscribe((products) => {
                this.suggestions = products;
            });
    }

    public onSubmitSearch() {
        const name = this.searchTextControl.value.trim();
        this.router.navigate(["/products"], {
            queryParams: { name },
        });
        this.clearSuggestions();
    }

    public onSelectProduct(product: Product) {
        this.clearSuggestions();
        this.searchTextControl.reset();
        this.router.navigate(["/products", product.id]).then();
    }

    public onClearSearch() {
        this.searchTextControl.setValue("");
        this.clearSuggestions();

        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: { name: null },
            queryParamsHandling: "merge",
        });
    }

    private clearSuggestions() {
        this.suggestions = [];
        this.showSuggestion = false;
    }

    public handleFocusInputElement() {
        const query = this.searchTextControl.value?.trim();
        this.showSuggestion = !!query;
    }

    public handleFocusOut() {
        this.showSuggestion = false;
    }
}
