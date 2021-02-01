import { NgModule } from '@angular/core';

import {
  ConsentDetailsWidgetModule,
  ConsentListWidgetModule,
  ConsentRequestWidgetModule,
  PaymentRequestWidgetModule,
} from '@backbase/retail-ang/consent';

@NgModule({
  imports: [
    ConsentDetailsWidgetModule,
    ConsentListWidgetModule,
    ConsentRequestWidgetModule,
    PaymentRequestWidgetModule,
  ],
})
export class ConsentBundleModule {}
