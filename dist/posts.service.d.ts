export interface Post {
    id: string;
    text: string;
    date: string;
}
export declare class PostsService {
    private posts;
    private lastPostId;
    create(post: Omit<Post, 'id' | 'date'>): Post;
    find(postId: string): Post | undefined;
    getAll(): Post[];
}
