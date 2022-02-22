import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostState } from './post.interface';

const featurePost = createFeatureSelector<PostState>('feature_post');

export const postsSelector = createSelector(
  featurePost,
  (state) => state.items
);

export const currentPostSelector = createSelector(
  featurePost,
  (state) => state.item
);
export const idPostSelector = createSelector(featurePost, (state) => state.id);
export const statusPostSelector = createSelector(
  featurePost,
  (state) => state.status
);
export const errorPostSelector = createSelector(
  featurePost,
  (state) => state.error
);

// get state từ một state lớn hơn
export const captionCurrentPostSelector = createSelector(
  currentPostSelector,
  (state) => state?.caption
);
export const contentCurrentPostSelector = createSelector(
  currentPostSelector,
  (state) => state?.content
);
export const authCurrentPostSelector = createSelector(
  currentPostSelector,
  (state) => state?.auth
);
// B1 : tạo ra một feature tổng
// B2: sử dụng createSelector và truyền vào các đối số tương ứng.
// B3: sử dụng createSelector lớn hơn để lấy ra Selector nhỏ hơn
