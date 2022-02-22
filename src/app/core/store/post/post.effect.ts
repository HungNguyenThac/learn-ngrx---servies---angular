import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { GET_POSTS } from './actionType';
import { getPostsFailed, getPostsSuccess } from './post.actionCreater';

@Injectable()
export class PostsEffects {
  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GET_POSTS),
      // mergeMap('call data thông qua services'),
      map((posts) => getPostsSuccess(posts)),
      catchError((error) => of(getPostsFailed(error)))
    )
  );

  constructor(private actions$: Actions) {}
}

// sau khi tạo xong effect thì sang CoreModule để đăng ký import EffectModule và đăng ký các effect muốn chạy