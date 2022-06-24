import { ActionType, createAction, props } from '@ngrx/store';
import {
  CREATE_POST,
  GET_POST,
  GET_POSTS,
  GET_POSTS_FAILED,
  GET_POSTS_SUCCESS,
  GET_POST_FAILED,
  GET_POST_SUCCESS,
  UPDATE_POST,
} from './actionType';
import { Post } from './post.interface';
import { IAction } from './post.active.interface';

/*------------------------- ngrx function ----------------------- */
export const getPosts = createAction(GET_POSTS);
export const getPostsSuccess = createAction(
  GET_POSTS_SUCCESS,
  props<{
    posts: Post[];
  }>()
);

export const getPostsFailed = createAction(
  GET_POSTS_FAILED,
  props<{
    error?: any;
  }>()
);

export const getPost = createAction(
  GET_POST,
  props<{
    id: string;
  }>()
);
export const getPostSuccess = createAction(GET_POST_SUCCESS);
export const getPostFailed = createAction(
  GET_POST_FAILED,
  props<{ error?: any }>()
);
export const updatePost = createAction(UPDATE_POST, props<{ id: string }>());
export const createPost = createAction(CREATE_POST, props<{ data: Post }>());

export type PostAction =
  | ActionType<typeof getPosts>
  | ActionType<typeof getPostsSuccess>
  | ActionType<typeof getPostsFailed>
  | ActionType<typeof getPost>
  | ActionType<typeof getPostSuccess>
  | ActionType<typeof getPostFailed>
  | ActionType<typeof updatePost>
  | ActionType<typeof createPost>;

/* ------------------------- OOP ------------------------- */
export class updatePostAction implements IAction {
  readonly type = UPDATE_POST;
  constructor(public payload?: any) {}
}
export class createPostAction implements IAction {
  readonly type = CREATE_POST;
  constructor(public payload?: any) {}
}
export class getPostAction implements IAction {
  readonly type = GET_POST;
  constructor(public payload?: any) {}
}

export type postActionUnion =
  | updatePostAction
  | createPostAction
  | getPostAction;
