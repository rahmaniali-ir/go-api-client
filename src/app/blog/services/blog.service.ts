import { Injectable } from '@angular/core';
import { Article } from '../types/blog';
import { ApiService } from 'src/app/core/services/api.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  posts: Article[] = [];

  constructor(private api: ApiService, private router: Router) {}

  fetchAllPosts() {
    this.api.get<Article[]>('posts').subscribe((response) => {
      this.posts = response.body;
    });
  }

  getPost(id: number) {
    return this.posts.find((post) => post.id === id);
  }

  openPost(id: number) {
    this.router.navigate([`/article/${id}`]);
  }
}
