import { Tag } from './tag.model';

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface Article {
  id: number;
  slug: string;
  header: string;
  subheader: string;
  body: ArticleBody;
  preview: string;
  tags: Tag[];
  publishedOn: string;
  author: string;
  readingTime: ReadingTimeStats;
}

export interface ArticleBody {
  markdown: string;
  lines?: LineHighlightMap;
}

export interface LineHighlightMap {
  [codeBlockIndex: string]: string;
}

export interface ReadingTimeStats {
  text: string;
  minutes: number;
  time: number;
  words: number;
}

export type ArticleIndex = Omit<Article, 'body'>;

export type MaybeArticle = Article | null;

export type MaybeArticleIndex = ArticleIndex | null;

export interface ArticleWhereUniqueInput {
  id?: number;
  slug?: string;
}
