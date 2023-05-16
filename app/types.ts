export type Article = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type Comment = {
  id: number;
  body: string;
  articleId: number;
  createdAt: string;
  updatedAt: string;
  author: Author;
};

export type Author = {
  name: string;
  avatarUrl: string;
};
