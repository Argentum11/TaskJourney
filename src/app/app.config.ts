import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withRouterConfig,
} from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withComponentInputBinding(),
      withRouterConfig({
        /* by setting it to always, it ensures the dynamic path values are injected into child routes */
        paramsInheritanceStrategy: 'always',
      })
    ),
  ],
};
