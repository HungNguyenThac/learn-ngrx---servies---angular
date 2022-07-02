import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../core/store/appState.interface';
import {
  getPosts,
  getPostSuccess,
} from '../core/store/post/post.actionCreator';
import { PostState } from './../core/store/post/post.interface';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  constructor(private store$: Store<AppState>) {}

  postStatus: any;

  ngOnInit(): void {
    this.store$.dispatch(getPosts());
    this.store$
      .select<any>((state) => state.feature_post)
      .subscribe(
        (postsState: PostState) => (this.postStatus = postsState.status)
      );
  }
  consoleLog() {
    console.log(this.postStatus);
  }
}
// appState khai báo kiểu dữ liệu mà store sẽ mang
// sử dụng injection store để dispatch các action mong muốn

// get state từ store dùng select
