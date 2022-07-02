import { PostState } from './post.interface';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, of } from 'rxjs';
import * as PostActions from './actionType';
import { getPostsFailed, getPostsSuccess } from './post.actionCreator';

@Injectable()
export class PostsEffects {
  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.GET_POSTS),
      // mergeMap('call data thông qua services'),
      map((posts) => getPostsSuccess(posts)),
      catchError((error) => of(getPostsFailed(error)))
    )
  );

  constructor(private actions$: Actions, private store$: Store<PostState>) {}
}

// sau khi tạo xong effect thì sang CoreModule để đăng ký import EffectModule và đăng ký các effect muốn chạy
