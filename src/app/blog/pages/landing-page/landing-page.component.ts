import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Article } from '../../types/blog';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../types/category';
import { allCategory } from '../../config/category';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.sass'],
})
export class LandingPageComponent implements OnInit {
  selectedCategory?: Category;
  rawSearchKey = '';

  constructor(private blog: BlogService, private category: CategoryService) {}

  ngOnInit(): void {
    this.blog.fetchArticles();
    this.category.fetchAllCategories();
  }

  get articles() {
    return this.blog.articlesArray;
  }

  get headerArticle() {
    return this.articles[0];
  }

  get categories() {
    return [allCategory, ...this.category.categories];
  }

  get searchKey() {
    return this.rawSearchKey.trim().toLowerCase();
  }

  get categoryArticles() {
    if (!this.selectedCategory || !this.selectedCategory.id)
      return this.articles;

    return this.articles.filter((article) =>
      article.categories.includes(this.selectedCategory!.id)
    );
  }

  get filteredArticles() {
    return this.categoryArticles.filter((article) =>
      article.title.toLowerCase().includes(this.searchKey)
    );
  }

  openArticle(article: Article) {
    this.blog.openArticle(article.id);
  }
}
