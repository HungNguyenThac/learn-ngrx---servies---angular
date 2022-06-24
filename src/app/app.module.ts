import { PostState } from './core/store/post/post.interface';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/store/post/core.module';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { CompanyDetailComponent } from './core/company-detail/company-detail.component';
import { FormsModule } from '@angular/forms';
import { TestServiceComponent } from './test-service/test-service.component';
import { storeLogger } from 'ngrx-store-logger';
import { localStorageSync } from 'ngrx-store-localstorage';

// install ng @ngrx/store ==> store
// install ng add @ngrx/store-devtools ==> redux dev tool

// đối với những dự án nhỏ, state ít, chúng ta có thể sử dụng STORE_DEV_TOOLS để quản lý state
// tuy nhiên, với dự án lớn, state nhiều, việc sử dụng STORE_DEV_TOOLS sẽ giảm hiệu năng của dự án
// khi đó chúng ta có thể sử dụng logger để in state ra console screen

export function logger(
  reducer: ActionReducer<PostState>
): ActionReducer<PostState> {
  return storeLogger()(reducer);
}

export const STORE_DEV_TOOLS: any[] | ModuleWithProviders<any> =
  environment.production
    ? []
    : StoreDevtoolsModule.instrument({
        maxAge: 25, // Retains last 25 states
        logOnly: environment.production,
      });

// localStorageSyncReducer sẽ giúp đồng bộ giữa state của store với localStorage,
// see more: https://github.com/btroncone/ngrx-store-localstorage
export function localStorageSyncReducer(
  reducer: ActionReducer<PostState>
): ActionReducer<PostState> {
  return localStorageSync({
    keys: ['core'],
    rehydrate: true,
  })(reducer);
}

export const metaReducers: Array<MetaReducer<any, any>> = environment.production
  ? [localStorageSyncReducer]
  : [logger, localStorageSyncReducer];

@NgModule({
  declarations: [
    AppComponent,
    PostDetailComponent,
    CompanyDetailComponent,
    TestServiceComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({}, { metaReducers }),
    STORE_DEV_TOOLS,
    FormsModule,
    CoreModule,
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
