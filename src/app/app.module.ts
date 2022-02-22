import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/store/post/core.module';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { CompanyDetailComponent } from './core/company-detail/company-detail.component';
import { FormsModule } from '@angular/forms';

// install ng @ngrx/store ==> store
// install ng add @ngrx/store-devtools ==> redux dev tool
@NgModule({
  declarations: [AppComponent, PostDetailComponent, CompanyDetailComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    FormsModule,
    CoreModule,
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
