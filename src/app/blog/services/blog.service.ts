import { Injectable } from '@angular/core';
import { Article, ArticleResponse } from '../types/blog';
import { ApiService } from 'src/app/core/services/api.service';
import { Router } from '@angular/router';
import { getArticleCategoryIds } from '../utils/category';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  articles: Article[] = [];

  constructor(private api: ApiService, private router: Router) {}

  fetchArticles() {
    this.api.get<ArticleResponse[]>('articles').subscribe((response) => {
      this.articles = response.body.map((article) => {
        return {
          ...article,
          categories: getArticleCategoryIds(article.categories),
        };
      });
    });
  }

  getArticle(id: number) {
    return this.articles.find((article) => article.id === id);
  }

  openArticle(id: number) {
    this.router.navigate([`/article/${id}`]);
  }
}
