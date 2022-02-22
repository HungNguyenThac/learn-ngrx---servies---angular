import { PostsEffects } from './post.effect';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { postReducer } from './post.reducers';

@NgModule({
  imports: [
    StoreModule.forFeature('feature_post', postReducer),
    EffectsModule.forFeature([PostsEffects]),
  ],
})
export class CoreModule {}

// EffectModule.forFeature đăng ký các effect muốn chạy
