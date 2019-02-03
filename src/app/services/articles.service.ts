import { Injectable } from '@angular/core';
import { Article, ArticleWhereUniqueInput } from '../models/article.model';
import { Tag, TagWhereUniqueInput } from '../models/tag.model';
import { API_ROOT, TAGS } from '../../constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  apiRoot = API_ROOT;
  articles: Article[] = [];

  constructor(private http: HttpClient) {}

  async getCachedArticles(): Promise<Article[]> {
    if (this.articles.length) return this.articles;

    const articles = await (this.http
      .get(`${this.apiRoot}/articles.json`)
      .toPromise() as Promise<Article[]>);
    this.articles = articles.reverse();
    return this.articles;
  }

  async getArticles({ tagName }: { tagName?: string } = {}): Promise<
    Article[]
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

    const articles = await this.getArticles();
    let article;
    switch (true) {
      case Boolean(id):
        article = articles.find(a => a.id === id);
        break;
      case Boolean(slug):
        article = articles.find(a => a.slug === slug);
        break;
    }

    if (!article) return {} as Article;
    const articleBody = await (this.http
      .get(`${this.apiRoot}/md/${article.body}.md`, { responseType: 'text' })
      .toPromise() as Promise<string>);
    return {
      ...article,
      body: articleBody,
    };
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
