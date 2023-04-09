import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Article } from '../../types/blog';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.sass'],
})
export class LandingPageComponent implements OnInit {
  rawSearchKey = '';

  constructor(private blog: BlogService) {}

  ngOnInit(): void {
    this.blog.fetchAllPosts();
  }

  get allPosts() {
    return this.blog.posts;
  }

  get headerArticle() {
    return this.allPosts[0];
  }

  get searchKey() {
    return this.rawSearchKey.trim().toLowerCase();
  }

  get postList() {
    return this.allPosts.filter((post) =>
      post.title.toLowerCase().includes(this.searchKey)
    );
  }

  openPost(article: Article) {
    this.blog.openPost(article.id);
  }
}
