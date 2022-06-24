import * as typeAction from './actionType';
import { PostState } from './post.interface';
import * as PostActions from './post.actionCreator';
import { createReducer, on, State } from '@ngrx/store';

const initialState: PostState = {
  items: [],

  item: {
    caption: '',
    content: '',
    auth: '',
  },
  status: 'idle',
  error: '',
};

/* ------------------------------ reducer OOP ------------------------ */

export function postReducer(
  state: PostState = initialState,
  action: PostActions.PostAction
): PostState {
  switch (action.type) {
    case typeAction.GET_POSTS: {
      return {
        ...state,
        status: 'loading',
      };
    }
    case typeAction.GET_POSTS_SUCCESS: {
      return {
        ...state,
        status: 'idle',
        items: action.posts,
      };
    }
    case typeAction.GET_POSTS_FAILED: {
      return {
        ...state,
        status: 'error',
        items: [],
      };
    }
    case typeAction.GET_POST: {
      return {
        ...state,
        status: 'loading',
        id: action.id,
      };
    }
    case typeAction.GET_POST_SUCCESS: {
      return {
        ...state,
        status: 'idle',
      };
    }
    case typeAction.GET_POST_FAILED: {
      return {
        ...state,
        status: 'error',
        item: {
          caption: '',
          content: '',
          auth: '',
        },
        error: action.error,
      };
    }
    case typeAction.UPDATE_POST: {
      return {
        ...state,
        status: 'loading',
        id: action.id,
      };
    }
    case typeAction.CREATE_POST: {
      return {
        ...state,
        status: 'loading',
        item: {
          caption: action.data.caption,
          content: action.data.content,
          auth: action.data.auth,
        },
      };
    }
    default: {
      return state;
    }
  }
}

/* ------------------------------ reducer function ------------------------ */

export const postReducerFn = createReducer(
  initialState,
  on(PostActions.getPosts, (state) => ({ ...state, status: 'loading' })),
  on(PostActions.getPostsSuccess, (state, { posts }) => ({
    ...state,
    items: posts,
    status: 'idle',
  })),
  on(PostActions.getPostsFailed, (state, { error }) => ({
    ...state,
    error: error,
  })),
  on(PostActions.getPost, (state, { id }) => ({ ...state, id: id })),
  on(PostActions.getPostSuccess, (state) => ({
    ...state,
    status: 'idle',
  })),
  on(PostActions.getPostFailed, (state, { error }) => ({
    ...state,
    error: error,
  })),
  on(PostActions.updatePost, (state, { id }) => ({ ...state, id: id })),
  on(PostActions.createPost, (state, { data }) => ({
    ...state,
    item: {
      caption: data.caption,
      content: data.content,
      auth: data.auth,
    },
  }))
);
