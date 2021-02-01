import { NgModule } from '@angular/core';

import { NavigationStepperWidgetModule } from '@backbase/universal-ang/navigation';
import {
  SelfEnrollmentConfirmationWidgetModule,
  SelfEnrollmentCreateAccountWidgetModule,
  SelfEnrollmentIdentificationWidgetModule,
  SelfEnrollmentLockedOutWidgetModule,
  SelfEnrollmentVerificationWidgetModule,
} from '@backbase/retail-ang/self-enrollment';

@NgModule({
  imports: [
    NavigationStepperWidgetModule,
    SelfEnrollmentConfirmationWidgetModule,
    SelfEnrollmentCreateAccountWidgetModule,
    SelfEnrollmentIdentificationWidgetModule,
    SelfEnrollmentLockedOutWidgetModule,
    SelfEnrollmentVerificationWidgetModule,
  ],
})
export class SelfEnrollmentBundleModule {}
