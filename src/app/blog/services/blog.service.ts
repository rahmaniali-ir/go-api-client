import { Injectable } from '@angular/core';
import { Article, ArticleContent, ArticleResponse } from '../types/blog';
import { ApiService } from 'src/app/core/services/api.service';
import { Router } from '@angular/router';
import { getArticleWithCategories } from '../utils/category';
import { Observable, of } from 'rxjs';
import { mapToArray } from 'src/app/core/utils/map';
import { emptyArticle } from '../config/article';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  articles = new Map<number, Article>();

  constructor(private api: ApiService, private router: Router) {}

  get articlesArray() {
    return mapToArray(this.articles);
  }

  fetchArticles() {
    this.api.get<ArticleResponse[]>('articles').subscribe((response) => {
      response.body.forEach((articleResponse) => {
        const article = getArticleWithCategories(articleResponse);

        const existingArticle = this.articles.get(articleResponse.id);
        if (existingArticle) {
          article.content = existingArticle.content;
        }

        this.articles.set(article.id, article);
      });
    });
  }

  fetchArticle(id: number) {
    return new Observable<Article>((subscriber) => {
      this.api
        .get<ArticleResponse | null>('article/' + id)
        .subscribe((response) => {
          if (response.body) {
            const article = getArticleWithCategories(response.body);
            this.articles.set(article.id, article);

            subscriber.next(article);
            subscriber.complete();
          } else {
            subscriber.error(new Error('Category does not exist'));
            subscriber.complete();
          }
        });
    });
  }

  fetchArticleContent(id: number) {
    return new Observable<Article>((subscriber) => {
      this.api
        .get<ArticleContent | null>('article/' + id + '/content')
        .subscribe((response) => {
          if (response.body) {
            const article = this.articles.get(id) || emptyArticle;

            article.id = id;
            article.content = response.body.content;

            this.articles.set(article.id, article);

            subscriber.next(article);
            subscriber.complete();
          } else {
            subscriber.error(new Error('Category does not exist'));
            subscriber.complete();
          }
        });
    });
  }

  getArticle(id: number) {
    if (this.articles.has(id)) {
      const article = this.articles.get(id)!;

      if (article.content) {
        return of(article);
      }

      return this.fetchArticleContent(id);
    }

    return this.fetchArticle(id);
  }

  openArticle(id: number) {
    this.router.navigate([`/article/${id}`]);
  }
}
