import { Injectable } from '@angular/core';
import { Article, ArticleResponse } from '../types/blog';
import { ApiService } from 'src/app/core/services/api.service';
import { Router } from '@angular/router';
import { getPostCategoryIds } from '../utils/category';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  posts: Article[] = [];

  constructor(private api: ApiService, private router: Router) {}

  fetchAllPosts() {
    this.api.get<ArticleResponse[]>('posts').subscribe((response) => {
      this.posts = response.body.map((article) => {
        return {
          ...article,
          categories: getPostCategoryIds(article.categories),
        };
      });
    });
  }

  getPost(id: number) {
    return this.posts.find((post) => post.id === id);
  }

  openPost(id: number) {
    this.router.navigate([`/article/${id}`]);
  }
}
