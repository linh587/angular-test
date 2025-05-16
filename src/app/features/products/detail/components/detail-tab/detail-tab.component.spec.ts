/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { DetailTabComponent } from "./detail-tab.component";

describe("DetailTabComponent", () => {
    let component: DetailTabComponent;
    let fixture: ComponentFixture<DetailTabComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [DetailTabComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DetailTabComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
