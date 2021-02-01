import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsRetailRoutingContainerAngComponent } from './notifications-retail-routing-container-ang.component';

describe('NotificationsRetailRoutingContainerAngComponent', () => {
  let component: NotificationsRetailRoutingContainerAngComponent;
  let fixture: ComponentFixture<NotificationsRetailRoutingContainerAngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationsRetailRoutingContainerAngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsRetailRoutingContainerAngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
