import { Tag } from './tag.model';

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

export type MaybeArticle = Article | null;

export interface ArticleWhereUniqueInput {
  id?: number;
  slug?: string;
}
