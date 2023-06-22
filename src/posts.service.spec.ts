import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  let todo: string;

  beforeEach(async () => {
    postsService = new PostsService();
  });

  it('should add a new post', () => {
    // arrange
    todo = 'Some pre-existing post';
    // act
    postsService.create({ text: todo });
    // assert
    expect(postsService.getAll().map((todo) => todo.text)).toEqual([todo]);
  });

  it('should find a post', () => {
    // arrange
    const todos = ['Write some tests', 'Write some more tests', 'Run tests!'];
    // act
    todos.forEach((todo) => postsService.create({ text: todo }));
    // assert
    expect(postsService.find('2')?.text).toEqual(todos[1]);
  });
});
