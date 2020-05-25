import 'hammerjs';
import { enableProdMode } from '@angular/core';
import '@angular/compiler';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
	enableProdMode();
}

platformBrowserDynamic()
	.bootstrapModule(AppModule)
	// eslint-disable-next-line no-console
	.catch((err) => console.error(err));
