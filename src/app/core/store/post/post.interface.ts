export interface Post {
  caption: string;
  content: string;
  auth: string;
}

export interface PostState {
  items: Post[];
  id?: string;
  item?: Post;
  status: 'idle' | 'loading' | 'error';
  error: string | undefined;
}
