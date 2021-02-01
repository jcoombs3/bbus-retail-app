import { NgModule } from '@angular/core';

import { NavigationLinkWidgetModule } from '@backbase/universal-ang/navigation';
import { PayordA2aExternalAccountManagerWidgetModule } from '@backbase/retail-ang/payment-order';
import { SavingGoalsWidgetModule } from '@backbase/retail-ang/pfm';
import {
  ProductSummaryDetailsWidgetModule,
  ProductSummaryManageAccountsWidgetModule,
  ProductSummaryListWidgetModule,
} from '@backbase/retail-ang/product-summary';
import { TransactionsListWidgetModule } from '@backbase/retail-ang/transactions';
import { QuickTransferWidgetModule } from '@backbase/retail-ang/quick-transfer';

@NgModule({
  imports: [
    NavigationLinkWidgetModule,
    ProductSummaryListWidgetModule,
    PayordA2aExternalAccountManagerWidgetModule,
    SavingGoalsWidgetModule,
    ProductSummaryManageAccountsWidgetModule,
    TransactionsListWidgetModule,
    ProductSummaryDetailsWidgetModule,
    QuickTransferWidgetModule,
  ],
})
export class AccountsTransactionsBundleModule {}
