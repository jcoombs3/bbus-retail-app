import { NgModule } from '@angular/core';

import { AccountStatementListWidgetModule } from '@backbase/retail-ang/account-statement';
import { ActionsProductNotificationsSettingsWidgetModule } from '@backbase/retail-ang/actions';
import {
  AuthorizedUsersCreateWidgetModule,
  AuthorizedUsersListWidgetModule,
} from '@backbase/retail-ang/authorized-users';
import { CardDetailsWidgetModule, CardsListWidgetModule, CardsTravelNoticeModule } from '@backbase/retail-ang/cards';
import { ContactManagerWidgetModule } from '@backbase/retail-ang/contact';
import { PayordStopChecksListWidgetAngModule, PayordStopChecksWidgetModule } from '@backbase/retail-ang/payment-order';
import { UserIdentitySecurityCenterWidgetModule, UserManageProfileWidgetModule } from '@backbase/retail-ang/users';

@NgModule({
  imports: [
    UserManageProfileWidgetModule,
    UserIdentitySecurityCenterWidgetModule,
    AuthorizedUsersListWidgetModule,
    AuthorizedUsersCreateWidgetModule,
    CardDetailsWidgetModule,
    CardsListWidgetModule,
    CardsTravelNoticeModule,
    ActionsProductNotificationsSettingsWidgetModule,
    ContactManagerWidgetModule,
    PayordStopChecksListWidgetAngModule,
    PayordStopChecksWidgetModule,
    AccountStatementListWidgetModule,
  ],
})
export class SelfServiceBundleModule {}
