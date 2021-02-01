import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { NotificationsRetailRoutingContainerAngComponent } from './notifications-retail-routing-container-ang.component';

@NgModule({
  declarations: [NotificationsRetailRoutingContainerAngComponent],
  imports: [
    CommonModule,
    BackbaseCoreModule.withConfig({
      classMap: { NotificationsRetailRoutingContainerAngComponent: NotificationsRetailRoutingContainerAngComponent },
    }),
  ],
})
export class NotificationsRetailRoutingContainerAngModule {}
