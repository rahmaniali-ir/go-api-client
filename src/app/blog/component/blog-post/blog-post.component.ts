import { Component, Input } from '@angular/core';
import { Article } from '../../types/blog';
import { environment } from 'src/environments/environment.development';
import { getCoverURL } from '../../utils/url';
import { CategoryService } from '../../services/category.service';
import { getPostCategoryIds } from '../../utils/category';
import { emptyArticle } from '../../config/article';

@Component({
  selector: 'blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.sass'],
})
export class BlogPostComponent {
  @Input() article: Article = emptyArticle;

  constructor(private category: CategoryService) {}

  get cover() {
    return getCoverURL(this.article.cover);
  }

  get categories() {
    return this.category.getCategoriesById(this.article.categories);
  }
}
