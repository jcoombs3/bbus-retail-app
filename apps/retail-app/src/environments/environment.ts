// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { PORTAL_CONTENT } from '@backbase/foundation-ang/web-sdk';
import { mockProviders, PortalContentServiceMockProvider } from '../mocks/providers';
import { pageModel } from '../mocks/page-model';
import { services } from '../mocks/sdk-services';
import { Environment } from './type';

export const environment: Environment = {
  production: false,
  bootstrap: {
    pageModel,
    services,
  },
  mockProviders: [
    ...mockProviders,
    {
      provide: PORTAL_CONTENT,
      useValue: PortalContentServiceMockProvider,
    },
  ],
};

//TODO: remove this hack when real data modules are created for every widget
if (window.localStorage.getItem('enableMocks') === null) {
  window.localStorage.setItem('enableMocks', 'true');
}

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
