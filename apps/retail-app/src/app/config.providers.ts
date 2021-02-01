import { Provider } from '@angular/core';
import { BB_PLACE_TYPE_CONFIG_TOKEN, PlaceTypeConfigProvider } from '@backbase/retail-ang/places';
import { HttpXsrfInterceptor } from './services/http-xsrf.interceptor';
import { HttpXsrfTokenExtractor, HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  QuickTransferProductKinds,
  QuickTransferConfigType,
  BB_QUICK_TRANSFER_CONFIG_TOKEN,
  QuickTransferAmountField,
  QuickTransferField,
} from '@backbase/retail-ang/quick-transfer';

export const PlacesConfigProvider: Array<Provider> = [
  {
    provide: BB_PLACE_TYPE_CONFIG_TOKEN,
    useValue: <PlaceTypeConfigProvider>{
      branch: {
        iconName: 'account',
        markerUrl: 'branch-marker.svg',
      },
      atm: {
        iconName: 'credit-card',
        markerUrl: 'atm-marker.svg',
      },
    },
  },
];

export const HttpXsrfProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: HttpXsrfInterceptor,
  deps: [HttpXsrfTokenExtractor],
  multi: true,
};

export const QuickTransferConfigProvider: Provider = {
  provide: BB_QUICK_TRANSFER_CONFIG_TOKEN,
  useValue: <QuickTransferConfigType>{
    fields: {
      fromAccount: <QuickTransferField>{
        productKinds: [
          QuickTransferProductKinds.savingsAccount,
          QuickTransferProductKinds.currentAccount,
          QuickTransferProductKinds.creditCard,
          QuickTransferProductKinds.loanAccount,
          QuickTransferProductKinds.connectedAccounts,
        ],
        otherFilters: [{ key: 'currency', value: ['EUR', 'AED', 'USD'] }],
        connectedAccountsSubHeader: 'Connected Accounts',
      },
      toAccount: <QuickTransferField>{
        productKinds: [
          QuickTransferProductKinds.savingsAccount,
          QuickTransferProductKinds.currentAccount,
          QuickTransferProductKinds.creditCard,
          QuickTransferProductKinds.loanAccount,
          QuickTransferProductKinds.connectedAccounts,
          QuickTransferProductKinds.contacts,
        ],
        connectedAccountsSubHeader: 'Connected Accounts',
      },
      amount: <QuickTransferAmountField>{ initialCurrency: 'USD' },
    },
    businessFunction: 'A2A Transfer',
    successEvents: 'eventName',
    paymentTypes: {
      internal: 'INTERNAL_TRANSFER',
      external: 'EXTERNAL_A2A',
      contact: 'M2M_TRANSFER',
    },
    disabledCombinations: [
      { from: QuickTransferProductKinds.loanAccount, to: QuickTransferProductKinds.loanAccount },
      { from: QuickTransferProductKinds.creditCard, to: QuickTransferProductKinds.creditCard },
    ],
  },
};
