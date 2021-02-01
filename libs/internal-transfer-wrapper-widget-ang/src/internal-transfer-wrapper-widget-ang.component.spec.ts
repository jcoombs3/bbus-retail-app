import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalTransferWrapperWidgetAngComponent } from './internal-transfer-wrapper-widget-ang.component';

describe('InternalTransferWrapperWidgetAngComponent', () => {
  let component: InternalTransferWrapperWidgetAngComponent;
  let fixture: ComponentFixture<InternalTransferWrapperWidgetAngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalTransferWrapperWidgetAngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalTransferWrapperWidgetAngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
