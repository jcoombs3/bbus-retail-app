import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BackbaseCoreModule, SessionTimeoutModule, StepUpModule } from '@backbase/foundation-ang/core';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NotificationsRetailRoutingContainerAngModule } from '@backbase/notifications-retail-routing-container-ang';
import { StepUpAuthenticationComponent } from './components/step-up/step-up-authentication.component';
import { SessionTimeoutComponent } from './components/session-timeout/session-timeout.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BackbaseStoreModule } from '@backbase/foundation-ang/store';
import { ContainersModule } from '@backbase/universal-ang/containers';
import { MegaMenuNavigationContainerModule, QuickLinkWidgetModule } from '@backbase/universal-ang/navigation';
import { LayoutContainerModule } from '@backbase/universal-ang/layouts';
import { HeadingWidgetModule } from '@backbase/universal-ang/heading';
import { ContentWidgetModule } from '@backbase/universal-ang/content';
import { BillpayPayeeListWidgetModule, BillpayManagePaymentWidgetModule, BillpayManagePayeeWidgetModule, BillpayPaymentsWidgetModule, BillpayPayverisEbillsEnrolmentWidgetModule, BillpayEnrolmentWidgetModule, BillpayGuardContainerModule, BillpayPayeeSummaryWidgetModule } from '@backbase/retail-ang/billpay';
import { UserContextMenuWidgetModule } from '@backbase/retail-ang/access-control';
import { NotificationsBadgeWidgetModule, NotificationsPopupsWidgetModule } from '@backbase/retail-ang/notifications';
import { TransactionSigningWidgetModule, TransactionSigningModule } from '@backbase/identity-ang/transaction-signing';
import { PlacesConfigProvider, HttpXsrfProvider, QuickTransferConfigProvider } from './config.providers';
import { BillpayManagePaymentDeactivateGuardService } from '@backbase/billpay-manage-payment-widget-ang';
import { BillpayManagePayeeDeactivateGuardService } from '@backbase/billpay-manage-payee-widget-ang';
import { PAGE_CONFIG, PageConfig } from '@backbase/foundation-ang/web-sdk';
import { CARDS_BASE_PATH } from '@backbase/data-ang/cards';
import { TRANSACTIONS_BASE_PATH } from '@backbase/data-ang/transactions';
import { ARRANGEMENT_MANAGER_BASE_PATH } from '@backbase/data-ang/arrangements';
import { SAVING_GOALS_BASE_PATH } from '@backbase/data-ang/saving-goals';
import { CATEGORIES_MANAGEMENT_BASE_PATH } from '@backbase/data-ang/categories-management';
import { BUDGETING_BASE_PATH } from '@backbase/data-ang/budgeting';
import { AUTHORIZED_USER_BASE_PATH } from '@backbase/data-ang/authorized-users';
import { BILLPAY_BASE_PATH, Payee, ElectronicPayee, Payment } from '@backbase/data-ang/billpay';
import { CONTACT_MANAGER_BASE_PATH } from '@backbase/data-ang/contact-manager';
import { PAYMENT_ORDER_BASE_PATH } from '@backbase/data-ang/payment-order';
import { STOP_CHECKS_BASE_PATH } from '@backbase/data-ang/stop-checks';
import { ACCOUNT_STATEMENT_BASE_PATH } from '@backbase/data-ang/account-statements';
import { USER_BASE_PATH } from '@backbase/data-ang/user';
import { PAYMENT_ORDER_A2A_BASE_PATH } from '@backbase/data-ang/payment-order-a2a';
import { PLACES_BASE_PATH } from '@backbase/data-ang/places';
import { MESSAGES_BASE_PATH } from '@backbase/data-ang/messages';
import { ACTIONS_BASE_PATH } from '@backbase/data-ang/actions';
import { NOTIFICATIONS_BASE_PATH } from '@backbase/data-ang/notifications';
import { ACCESS_CONTROL_BASE_PATH } from '@backbase/data-ang/accesscontrol';
import { CONSENT_BASE_PATH } from '@backbase/data-ang/consent';
import { StepUpConfig } from './components/step-up/step-up-config';
import { bundlesDefinition } from './bundles-definition';

export function getBasePath(servicePath: string) { return (config: PageConfig) => `${config.apiRoot}/${servicePath}`; }

@NgModule({
  declarations: [
    AppComponent,
    StepUpAuthenticationComponent,
    SessionTimeoutComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    HttpClientModule,
    BackbaseCoreModule.forRoot({
      assets: {
        assetsStaticItemName: environment.assetsStaticItemName || '',
      },
      classMap: {},
      lazyModules: bundlesDefinition,
      flows: [
        {
          output: { classId: 'BillpayPayeeListWidgetComponent', outputName: 'payPayeeOneOff' },
          input: { classId: 'BillpayManagePaymentWidgetComponent', inputName: 'payee' },
          mapPayload: fromPayeeObjectToOneOffPaymentAndPayeeId,
        },
        {
          output: { classId: 'BillpayPayeeListWidgetComponent', outputName: 'payPayeeRecurring' },
          input: { classId: 'BillpayManagePaymentWidgetComponent', inputName: 'payee' },
          mapPayload: fromPayeeObjectToRecurringPaymentAndPayeeId,
        },
        {
          output: { classId: 'BillpayPayeeListWidgetComponent', outputName: 'payverisEbillEnrol' },
          input: { classId: 'BillpayPayverisEbillsEnrolmentWidgetComponent', inputName: 'payeeID' },
          mapPayload: fromPayeeObjectToPayeeId,
        },
        {
          output: { classId: 'BillpayManagePayeeWidgetComponent', outputName: 'payeeSaved' },
          input: { classId: 'BillpayPayeeListWidgetComponent', inputName: 'payee' },
          mapPayload: payeeIdToPayeeIdOrEmptyString,
        },
        {
          output: { classId: 'BillpayViewPaymentsWidgetComponent', outputName: 'editPayment' },
          input: { classId: 'BillpayManagePaymentWidgetComponent', inputName: 'id' },
          mapPayload: fromPaymentObjectToPaymentTypeAndId,
        },
        {
          output: { classId: 'BillpayGuardContainerComponent', outputName: 'goToEnrolment' },
          input: { classId: 'BillpayEnrolmentWidgetComponent', inputName: 'previousRoute' },
        },
        {
          output: { classId: 'BillpayPayeeListWidgetComponent', outputName: 'payeeSummary' },
          input: { classId: 'BillpayPayeeSummaryWidgetComponent', inputName: 'payeeID' },
          mapPayload: fromPayeeObjectToPayeeId,
        },
        {
          output: { classId: 'BillpayPayeeSummaryWidgetComponent', outputName: 'payPayeeOneOff' },
          input: { classId: 'BillpayManagePaymentWidgetComponent', inputName: 'payee' },
          mapPayload: fromPayeeObjectToOneOffPaymentAndPayeeId,
        },
      ],
      logDeprecations: true,
      features: {
        EXTRA_ENCODE_URI_PARAMS: true,
        ACTION_RECIPES_UNIQUE_CONSTRAINT_ENDPOINTS: true,
        ENFORCE_INJECTOR_FOR_CREATE_STORE: true,
      },
    }),
    RouterModule.forRoot([], { initialNavigation: false, useHash: true }),
    NotificationsRetailRoutingContainerAngModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientXsrfModule.disable(),
    SessionTimeoutModule.forRoot({
      sessionTimeoutComponentClass: SessionTimeoutComponent,
      inactivityModalTime: 60,
    }),
    StepUpModule.forRoot(StepUpConfig),
    BackbaseStoreModule,
    ContainersModule,
    MegaMenuNavigationContainerModule,
    QuickLinkWidgetModule,
    LayoutContainerModule,
    HeadingWidgetModule,
    ContentWidgetModule,
    BillpayPayeeListWidgetModule,
    BillpayManagePaymentWidgetModule,
    BillpayManagePayeeWidgetModule,
    BillpayPaymentsWidgetModule,
    BillpayPayverisEbillsEnrolmentWidgetModule,
    BillpayEnrolmentWidgetModule,
    BillpayGuardContainerModule,
    BillpayPayeeSummaryWidgetModule,
    UserContextMenuWidgetModule,
    NotificationsBadgeWidgetModule,
    NotificationsPopupsWidgetModule,
    TransactionSigningWidgetModule,
    TransactionSigningModule.withConfig({
      useRedirectFlow: false,
    })
  ],
  providers: [...environment.mockProviders || [], PlacesConfigProvider, HttpXsrfProvider, QuickTransferConfigProvider, BillpayManagePaymentDeactivateGuardService, BillpayManagePayeeDeactivateGuardService, { provide: CARDS_BASE_PATH, useFactory: getBasePath('cards-presentation-service'), deps: [PAGE_CONFIG] }, { provide: TRANSACTIONS_BASE_PATH, useFactory: getBasePath('transaction-manager'), deps: [PAGE_CONFIG] }, { provide: ARRANGEMENT_MANAGER_BASE_PATH, useFactory: getBasePath('arrangement-manager'), deps: [PAGE_CONFIG] }, { provide: SAVING_GOALS_BASE_PATH, useFactory: getBasePath('saving-goal-planner'), deps: [PAGE_CONFIG] }, { provide: CATEGORIES_MANAGEMENT_BASE_PATH, useFactory: getBasePath('transaction-category-collector'), deps: [PAGE_CONFIG] }, { provide: BUDGETING_BASE_PATH, useFactory: getBasePath('budget-planner'), deps: [PAGE_CONFIG] }, { provide: AUTHORIZED_USER_BASE_PATH, useFactory: getBasePath('authorized-user'), deps: [PAGE_CONFIG] }, { provide: BILLPAY_BASE_PATH, useFactory: getBasePath('billpay-integrator'), deps: [PAGE_CONFIG] }, { provide: CONTACT_MANAGER_BASE_PATH, useFactory: getBasePath('contact-manager'), deps: [PAGE_CONFIG] }, { provide: PAYMENT_ORDER_BASE_PATH, useFactory: getBasePath('payment-order-service'), deps: [PAGE_CONFIG] }, { provide: STOP_CHECKS_BASE_PATH, useFactory: getBasePath('stop-checks'), deps: [PAGE_CONFIG] }, { provide: ACCOUNT_STATEMENT_BASE_PATH, useFactory: getBasePath('account-statement'), deps: [PAGE_CONFIG] }, { provide: USER_BASE_PATH, useFactory: getBasePath('user-manager'), deps: [PAGE_CONFIG] }, { provide: PAYMENT_ORDER_A2A_BASE_PATH, useFactory: getBasePath('payment-order-a2a'), deps: [PAGE_CONFIG] }, { provide: PLACES_BASE_PATH, useFactory: getBasePath('places-presentation-service'), deps: [PAGE_CONFIG] }, { provide: MESSAGES_BASE_PATH, useFactory: getBasePath('messages-service'), deps: [PAGE_CONFIG] }, { provide: ACTIONS_BASE_PATH, useFactory: getBasePath('action'), deps: [PAGE_CONFIG] }, { provide: NOTIFICATIONS_BASE_PATH, useFactory: getBasePath('notifications-service'), deps: [PAGE_CONFIG] }, { provide: ACCESS_CONTROL_BASE_PATH, useFactory: getBasePath('access-control'), deps: [PAGE_CONFIG] }, { provide: CONSENT_BASE_PATH, useFactory: getBasePath('consent'), deps: [PAGE_CONFIG] }],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function fromPayeeObjectToOneOffPaymentAndPayeeId(payee?: Payee | ElectronicPayee) {
  return payee ? `o-${payee.id}` : '';
}

export function fromPayeeObjectToRecurringPaymentAndPayeeId(payee?: Payee | ElectronicPayee) {
  return payee ? `r-${payee.id}` : '';
}

export function fromPayeeObjectToPayeeId(payee?: Payee | ElectronicPayee) {
  return payee ? `${payee.id}` : '';
}

export function payeeIdToPayeeIdOrEmptyString(payeeId?: string) {
  return payeeId || '';
}

export function fromPaymentObjectToPaymentTypeAndId(item?: Payment) {
  return item ? `${item.recurring ? 'r' : 'o'}-${item.id}` : '';
}
