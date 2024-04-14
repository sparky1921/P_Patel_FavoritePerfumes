import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

//injecting new services here
import { provideHttpClient } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

//import routes
import { appRoutes } from './app-routing.module';
import { provideServiceWorker } from '@angular/service-worker';

export const appConfig: ApplicationConfig = {
  providers: [HttpClientModule, provideRouter(appRoutes),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    ...extractProviders(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
        dataEncapsulation: false,
        delay: 1000,
    })), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync(), provideServiceWorker('ngsw-worker.js', {
        enabled: !isDevMode(),
        registrationStrategy: 'registerWhenStable:30000'
    })]
};

function extractProviders(moduleWithProviders: any): any[] {
  if (moduleWithProviders && moduleWithProviders.providers) {
    return moduleWithProviders.providers;
  } else {
    return [];
  }
}
