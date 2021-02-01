import { NgModule } from '@angular/core';

import {
  MessagesConversationThreadWidgetModule,
  MessagesConversationsListWidgetModule,
  MessagesCreateMessageModalWidgetModule,
} from '@backbase/retail-ang/messages';

@NgModule({
  imports: [
    MessagesCreateMessageModalWidgetModule,
    MessagesConversationsListWidgetModule,
    MessagesConversationThreadWidgetModule,
  ],
})
export class MessagesBundleModule {}
