import { Component } from '@angular/core';
import { PayordOmniPaymentWidgetAngComponent } from '@backbase/payord-omni-payment-widget-ang';
import { CopyRoutes, ItemModel } from '@backbase/foundation-ang/core';
import {
  CHAPS,
  PaymentTypeConfig,
  SEPA,
  US_ACH_CREDIT,
  US_DOMESTIC_WIRE,
  INTERNAL_TRANSFER,
  UK_FASTER_PAYMENT,
} from '@backbase/payment-orders-ang/configs';
import { combineLatest, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'bb-internal-transfer-wrapper-widget-ang',
  templateUrl: './internal-transfer-wrapper-widget-ang.component.html',
})
@CopyRoutes(PayordOmniPaymentWidgetAngComponent)
export class InternalTransferWrapperWidgetAngComponent {
  paymentType$ = this.itemModel.property<string>('paymentType');
  defaultScheme$: Observable<'BBAN' | 'IBAN' | undefined> = this.itemModel
    .property('defaultScheme')
    .pipe(map((value) => (value !== 'BBAN' && value !== 'IBAN' ? undefined : value)));
  enableApprovals$ = this.itemModel.property<boolean>('enableApprovals');
  enablePaymentTemplateSelector$ = of(false);
  enableSavePaymentAsTemplate$ = of(false);
  options$ = combineLatest([
    this.defaultScheme$,
    this.enableApprovals$,
    this.enablePaymentTemplateSelector$,
    this.enableSavePaymentAsTemplate$,
  ]).pipe(
    map(([defaultScheme, enableApprovals, enablePaymentTemplateSelector, enableSavePaymentAsTemplate]) => ({
      defaultScheme,
      enableApprovals,
      enablePaymentTemplateSelector,
      enableSavePaymentAsTemplate,
    })),
  );

  constructor(private readonly itemModel: ItemModel) {}

  getPaymentConfig(paymentType: string): PaymentTypeConfig | undefined {
    switch (paymentType) {
      case 'SEPA':
        return SEPA;
      case 'US_ACH_CREDIT':
        return US_ACH_CREDIT;
      case 'FASTER_PAYMENT':
        return UK_FASTER_PAYMENT;
      case 'CHAPS':
        return CHAPS;
      case 'US_DOMESTIC_WIRE':
        return US_DOMESTIC_WIRE;
      case 'INTERNAL_TRANSFER':
        return INTERNAL_TRANSFER;
      default:
        return undefined;
    }
  }

  getBusinessFunction(paymentType: string): string {
    switch (paymentType) {
      case 'SEPA':
        return 'SEPA CT';
      case 'US_ACH_CREDIT':
        return 'ACH Credit Transfer';
      case 'CHAPS':
        return 'UK CHAPS';
      case 'FASTER_PAYMENT':
        return 'UK Faster Payments';
      case 'US_DOMESTIC_WIRE':
        return 'US Domestic Wire';
      case 'INTERNAL_TRANSFER':
        return 'A2A Transfer';
    }
    return 'SEPA CT';
  }
}
