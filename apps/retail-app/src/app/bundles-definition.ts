import { LazyConfig } from '@backbase/foundation-ang/core';

export const bundlesDefinition: LazyConfig = [
  {
    components: [
      'NavigationLinkWidgetComponent',
      'ProductSummaryListWidgetComponent',
      'PayordA2aExternalAccountManagerWidgetComponent',
      'SavingGoalsWidgetComponent',
      'ProductSummaryManageAccountsWidgetComponent',
      'TransactionsListWidgetComponent',
      'ProductSummaryDetailsWidgetComponent',
      'QuickTransferWidgetComponent',
    ],
    loadChildren: () =>
      import('../bundles/bundle-accounts-transactions').then((m) => m.AccountsTransactionsBundleModule),
  },
  {
    components: [
      'InternalTransferWrapperWidgetAngComponent',
      'PayordInitiatePaymentWidgetComponent',
      'PayordUpcomingPaymentsWidgetComponent',
    ],
    loadChildren: () => import('../bundles/bundle-payment-orders').then((m) => m.PaymentOrdersBundleModule),
  },
  {
    components: [
      'LeftToSpendWidgetComponent',
      'TopMetricsWidgetComponent',
      'TurnoversWidgetComponent',
      'IncomeSpendingAnalysisWidgetComponent',
    ],
    loadChildren: () => import('../bundles/bundle-financial-insights').then((m) => m.FinancialInsightsBundleModule),
  },
  {
    components: [
      'UserManageProfileWidgetComponent',
      'UserIdentitySecurityCenterWidgetComponent',
      'AuthorizedUsersListWidgetComponent',
      'AuthorizedUsersCreateWidgetComponent',
      'CardDetailsWidgetComponent',
      'CardsListWidgetComponent',
      'CardsTravelNoticeWidgetComponent',
      'ActionsProductNotificationsSettingsWidgetComponent',
      'ContactManagerWidgetComponent',
      'PayordStopChecksListWidgetAngComponent',
      'PayordStopChecksWidgetAngComponent',
      'AccountStatementListWidgetComponent',
    ],
    loadChildren: () => import('../bundles/bundle-self-service').then((m) => m.SelfServiceBundleModule),
  },
  {
    components: ['BudgetWidgetComponent'],
    loadChildren: () => import('../bundles/bundle-budgets').then((m) => m.BudgetsBundleModule),
  },
  {
    components: [
      'MessagesCreateMessageModalWidgetComponent',
      'MessagesConversationsListWidgetComponent',
      'MessagesConversationThreadWidgetComponent',
    ],
    loadChildren: () => import('../bundles/bundle-messages').then((m) => m.MessagesBundleModule),
  },
  {
    components: ['PlacesWidgetComponent'],
    loadChildren: () => import('../bundles/bundle-places').then((m) => m.PlacesBundleModule),
  },
  {
    components: ['ProductSummaryAccountSelectorWidgetComponent'],
    loadChildren: () => import('../bundles/bundle-account-selector').then((m) => m.AccountSelectorBundleModule),
  },
  {
    components: ['LoginWidgetComponent', 'BackgroundContainerComponent'],
    loadChildren: () => import('../bundles/bundle-login').then((m) => m.LoginBundleModule),
  },
  {
    components: ['SelectContextWidgetComponent'],
    loadChildren: () => import('../bundles/bundle-select-context').then((m) => m.SelectContextBundleModule),
  },
  {
    components: [
      'NavigationStepperWidgetComponent',
      'SelfEnrollmentConfirmationWidgetComponent',
      'SelfEnrollmentCreateAccountWidgetComponent',
      'SelfEnrollmentIdentificationWidgetComponent',
      'SelfEnrollmentLockedOutWidgetComponent',
      'SelfEnrollmentVerificationWidgetComponent',
    ],
    loadChildren: () => import('../bundles/bundle-self-enrollment').then((m) => m.SelfEnrollmentBundleModule),
  },
  {
    components: [
      'ConsentDetailsWidgetComponent',
      'ConsentListWidgetComponent',
      'ConsentRequestWidgetComponent',
      'PaymentRequestWidgetComponent',
    ],
    loadChildren: () => import('../bundles/bundle-consent').then((m) => m.ConsentBundleModule),
  },
];
