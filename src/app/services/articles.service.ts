import { Injectable, Optional, Inject } from '@angular/core';
import {
  Article,
  ArticleIndex,
  ArticleWhereUniqueInput,
  MaybeArticleIndex,
} from '../models/article.model';
import { Tag, TagWhereUniqueInput } from '../models/tag.model';
import { TAGS } from '../../constants';
import { HttpClient } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { articles } from '../../../articles';
import { makeStateKey, TransferState } from '@angular/platform-browser';

const STATE_KEY_ARTICLES = makeStateKey('articles');

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  apiRoot: string;
  articles: ArticleIndex[] = [];

  constructor(
    @Optional() @Inject(APP_BASE_HREF) origin: string,
    private http: HttpClient,
    private state: TransferState,
  ) {
    this.apiRoot = `${origin || ''}/api`;
    this.articles = state.get(STATE_KEY_ARTICLES, []);
  }

  async getCachedArticles(): Promise<ArticleIndex[]> {
    if (this.articles.length) return this.articles;

    this.articles = articles.reverse();
    this.state.set(STATE_KEY_ARTICLES, this.articles);
    return this.articles;
  }

  async getArticles({ tagName }: { tagName?: string } = {}): Promise<
    ArticleIndex[]
  > {
    const articles = await this.getCachedArticles();
    if (tagName) {
      return articles.filter(
        a => a.tags.findIndex(t => t.name === tagName) !== -1,
      );
    }
    return articles;
  }

  async getArticle({ id, slug }: ArticleWhereUniqueInput): Promise<Article> {
    if (!id && !slug) {
      throw new Error(
        'Invalid input: getArticle input requires either id or slug',
      );
    }

    if (id) {
      throw new Error('`id` searching for Articles is not implemented');
    }

    const articles = (await this.getArticles()) as Article[];
    const article = articles.find(a => a.slug === slug);
    return article || ({} as Article);
  }

  async getSurroundingArticles(
    article: Article,
  ): Promise<[MaybeArticleIndex, MaybeArticleIndex]> {
    const articles = await this.getArticles();
    const idx = articles.findIndex(({ id }) => article.id === id);
    switch (idx) {
      case 0:
        return [null, articles[idx + 1]];
      case articles.length - 1:
        return [articles[idx - 1], null];
      case -1:
        throw new Error(
          `Invalid input: article with id ${article.id} does not exist`,
        );
      default:
        return [articles[idx - 1], articles[idx + 1]];
    }
  }

  async getTags(): Promise<Tag[]> {
    return Object.values(TAGS);
  }

  async getTag({ id, name }: TagWhereUniqueInput): Promise<Tag> {
    if (!id && !name) {
      throw new Error('Invalid input: getTag input requires either id or name');
    }

    const tags = await this.getTags();
    let tag;
    switch (true) {
      case Boolean(id):
        return tags.find(t => t.id === id);
      case Boolean(name):
        return tags.find(t => t.name === name);
    }

    return tag || {};
  }
}
