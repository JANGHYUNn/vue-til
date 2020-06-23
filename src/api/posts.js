import { posts } from './index';

// 학습 노트 데이터 조회 API
const fetchPosts = () => posts.get('/');

// 학습 노트 생성
const createPost = postData => posts.post('/', postData);

// 학습 노트 삭제
const deletePost = postId => posts.delete(postId);

// 특정 학습 노트를 조회하는 API
const fetchPost = postId => posts.get(postId);

// 학습 노트를 수정하는 API
const editPost = (postId, postData) => posts.put(postId, postData);

export { fetchPosts, createPost, deletePost, fetchPost, editPost };
