import { NgModule } from '@angular/core';

import {
  BillpayEnrolmentWidgetModule,
  BillpayManagePayeeWidgetModule,
  BillpayManagePaymentWidgetModule,
  BillpayPayeeListWidgetModule,
  BillpayPayeeSummaryWidgetModule,
  BillpayPaymentsWidgetModule,
  BillpayPayverisEbillsEnrolmentWidgetModule,
} from '@backbase/retail-ang/billpay';

@NgModule({
  imports: [
    BillpayPayeeListWidgetModule,
    BillpayManagePaymentWidgetModule,
    BillpayManagePayeeWidgetModule,
    BillpayPayeeSummaryWidgetModule,
    BillpayPayverisEbillsEnrolmentWidgetModule,
    BillpayEnrolmentWidgetModule,
    BillpayPaymentsWidgetModule,
  ],
})
export class BillPayBundleModule {}
