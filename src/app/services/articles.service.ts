import { Injectable } from '@angular/core';
import { Article, ArticleWhereUniqueInput } from '../models/article.model';
import { Tag, TagWhereUniqueInput } from '../models/tag.model';
import { TAGS } from '../../constants';
import { articles } from '../articles';

const articlesNewestFirst = articles.reverse();

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor() {}

  async getArticles({ tagName }: { tagName?: string } = {}): Promise<
    Article[]
  > {
    if (tagName) {
      return articlesNewestFirst.filter(
        a => a.tags.findIndex(t => t.name === tagName) !== -1,
      );
    }
    return articlesNewestFirst;
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
        return articles.find(a => a.id === id);
      case Boolean(slug):
        return articles.find(a => a.slug === slug);
    }

    return article || {};
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
