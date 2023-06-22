import { experiments } from 'webpack';
import { Post, PostsService } from './posts.service';
import { create } from 'domain';
import exp from 'constants';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  beforeEach(async () => {
    postsService = new PostsService();
  });

  it('should add a new post', () => {
    const createdPost = postsService.create(post);

    expect(createdPost.text).toEqual(post.text);
    expect(createdPost.id).toBeDefined();
    expect(createdPost.date).toBeDefined();

    const allPosts = postsService.getAll();
    expect(allPosts).toContainEqual(createdPost);
  });

  it('should find a post', () => {
    const createdPost = postsService.create(post);
    const foundPost = postsService.find(createdPost.id);

    expect(foundPost).toEqual(createdPost);
  });
});
