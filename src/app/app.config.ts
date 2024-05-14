import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { PostsEffects } from './post.effects';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore(reducers, { metaReducers }),
     provideStoreDevtools({maxAge: 25, logOnly: !isDevMode()}),
    provideHttpClient(), provideEffects([PostsEffects])]
};
