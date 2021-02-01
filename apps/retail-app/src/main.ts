import { StaticProvider, enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { registerSingleApp } from '@backbase/foundation-ang/core';

import { AppModule } from './app/app.module';

import { environment } from './environments/environment';
if (environment.production) {
  enableProdMode();
}


/**
 * Warning: Modification of this section of the code
 * may prevent automatic updates of this project in the future.
 * More details: https://community.backbase.com/documentation/Retail-Apps/latest/web_app_upgradability_understand 
 */
const start = registerSingleApp((extraProviders: Array<StaticProvider>) =>
  platformBrowserDynamic(extraProviders).bootstrapModule(AppModule),
);

if (environment.bootstrap) {
  const { services, pageModel } = environment.bootstrap;
  start(services).then(app => {
    app.bootstrap(pageModel, { parentName: '', index: 0 });
  });
}
/**
 * End of the section 
 */

