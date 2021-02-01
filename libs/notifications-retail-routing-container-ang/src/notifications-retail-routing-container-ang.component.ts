import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemModelTree } from '@backbase/foundation-ang/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'bb-notifications-retail-routing-container-ang',
  template: '<bb-area [children]="(children | async) || []"></bb-area>',
})
export class NotificationsRetailRoutingContainerAngComponent {
  @Output() viewConversation = new EventEmitter<string>();
  @Output() selectedAccount = new EventEmitter<string>();
  @Output() viewTransaction = new EventEmitter<string>();

  @Input() set notificationRouting(routing: any) {
    const payloadId =
      (routing['where-to'] === 'transaction-view' ? routing?.data?.arrangementId : routing?.data?.id) || '';

    switch (routing['where-to']) {
      case 'conversation-view':
        this.viewConversation.emit(payloadId);
        break;
      case 'transaction-view':
        this.viewTransaction.emit(payloadId);
        break;
      case 'arrangement-view':
        this.selectedAccount.emit(payloadId);
        break;
    }
  }

  children: Observable<Array<ItemModelTree>> = this.model.children;

  constructor(private readonly model: ItemModelTree) {}
}
