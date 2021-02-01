import { NgModule } from '@angular/core';

import { InternalTransferWrapperWidgetAngModule } from '@backbase/internal-transfer-wrapper-widget-ang';
import { PayordUpcomingPaymentsWidgetModule } from '@backbase/retail-ang/payment-order';

@NgModule({
  imports: [InternalTransferWrapperWidgetAngModule, PayordUpcomingPaymentsWidgetModule],
})
export class PaymentOrdersBundleModule {}
