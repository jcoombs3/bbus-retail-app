import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule, ButtonModule, HeaderModule } from '@backbase/ui-ang';
import { SessionTimeoutComponent } from './session-timeout.component';

const uiModules = [ModalModule, ButtonModule, HeaderModule];

@NgModule({
  imports: [CommonModule, ...uiModules],
  declarations: [SessionTimeoutComponent],
  exports: [SessionTimeoutComponent, ...uiModules],
})
export class SessionTimeoutModule {}
