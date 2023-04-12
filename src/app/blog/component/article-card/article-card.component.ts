import { Component, HostListener, Input } from '@angular/core';
import { Article } from '../../types/blog';
import { getCoverURL } from '../../utils/url';
import { CategoryService } from '../../services/category.service';
import { emptyArticle } from '../../config/article';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.sass'],
})
export class ArticleCardComponent {
  @Input() article: Article = emptyArticle;

  constructor(private blog: BlogService, private category: CategoryService) {}

  get cover() {
    return getCoverURL(this.article.cover);
  }

  get categories() {
    return this.category.getCategoriesById(this.article.categories);
  }

  @HostListener('click') onClick() {
    this.blog.openArticle(this.article.id);
  }
}
