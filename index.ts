import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

import './locales/pt.po';

// @ts-ignore
if ('WEBPACK.MODE' === 'production') {
  enableProdMode();
}

export function bootstrap() {
  platformBrowserDynamic()
    .bootstrapModule(AppModule).catch((err) => console.log(err));
}
