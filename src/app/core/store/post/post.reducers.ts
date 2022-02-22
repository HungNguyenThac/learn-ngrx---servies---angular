import {
  GET_POSTS,
  GET_POST,
  GET_POST_FAILED,
  GET_POST_SUCCESS,
  UPDATE_POST,
  CREATE_POST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILED,
} from './actionType';
import { PostState } from './post.interface';
import * as PostActions from './post.actionCreater';

const inittialState: PostState = {
  items: [],

  item: {
    caption: '',
    content: '',
    auth: '',
  },
  status: 'idle',
  error: '',
};

/* ------------------------ ngrx function ------------------------- */
export function postReducer(
  state: PostState = inittialState,
  action: PostActions.PostAction
): PostState {
  switch (action.type) {
    case GET_POSTS: {
      return {
        ...state,
        status: 'loading',
      };
    }
    case GET_POSTS_SUCCESS: {
      return {
        ...state,
        status: 'idle',
        items: action.posts,
      };
    }
    case GET_POSTS_FAILED: {
      return {
        ...state,
        status: 'error',
        items: [],
      };
    }
    case GET_POST: {
      return {
        ...state,
        status: 'loading',
        id: action.id,
      };
    }
    case GET_POST_SUCCESS: {
      return {
        ...state,
        status: 'idle',
        item: action.post,
      };
    }
    case GET_POST_FAILED: {
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
    case UPDATE_POST: {
      return {
        ...state,
        status: 'loading',
        id: action.id,
      };
    }
    case CREATE_POST: {
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

/* ------------------------------ reducer OOP ------------------------ */
export function PostReducerAction(
  state: PostState = inittialState,
  action: PostActions.postActionUnion
): PostState {
  switch (action.type) {
    case UPDATE_POST: {
      return {
        ...state,
        id: action.payload,
      };
    }
  }
}
