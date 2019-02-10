import { Tag } from './tag.model';

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface Article {
  id: number;
  slug: string;
  header: string;
  subheader: string;
  body: string;
  preview: string;
  tags: Tag[];
  publishedOn: string;
  author: string;
}

export type ArticleIndex = Omit<Article, 'body'>;

export type MaybeArticle = Article | null;

export type MaybeArticleIndex = ArticleIndex | null;

export interface ArticleWhereUniqueInput {
  id?: number;
  slug?: string;
}
