import { PORTAL_CONTENT } from '@backbase/foundation-ang/web-sdk';
import { mockProviders, PortalContentServiceMockProvider } from '../mocks/providers';
import { pageModel } from '../mocks/page-model';
import { services } from '../mocks/sdk-services';
import { Environment } from './type';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NotificationInterceptor } from '../app/services/http-notifications.interceptor';

export const environment: Environment = {
  production: false,
  bootstrap: {
    pageModel,
    services,
  },
  mockProviders: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotificationInterceptor,
      multi: true,
    },
    ...mockProviders,
    {
      provide: PORTAL_CONTENT,
      useValue: PortalContentServiceMockProvider,
    },
  ],
};
