import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

import { APP_BASE_HREF } from '@angular/common';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule, // required for lazy-loaded routes
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: environment.appBaseHref }],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
