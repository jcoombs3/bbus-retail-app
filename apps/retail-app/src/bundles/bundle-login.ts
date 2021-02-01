import { NgModule } from '@angular/core';

import { BackgroundContainerModule } from '@backbase/universal-ang/content';
import { LoginWidgetModule } from '@backbase/retail-ang/iam';

@NgModule({
  imports: [BackgroundContainerModule, LoginWidgetModule],
})
export class LoginBundleModule {}
