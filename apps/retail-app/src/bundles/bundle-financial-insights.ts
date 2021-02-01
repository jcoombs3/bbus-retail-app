import { NgModule } from '@angular/core';

import {
  IncomeSpendingAnalysisWidgetModule,
  TurnoversWidgetModule,
  LeftToSpendWidgetModule,
  TopMetricsWidgetModule,
} from '@backbase/retail-ang/pfm';

@NgModule({
  imports: [TurnoversWidgetModule, IncomeSpendingAnalysisWidgetModule, LeftToSpendWidgetModule, TopMetricsWidgetModule],
})
export class FinancialInsightsBundleModule {}
