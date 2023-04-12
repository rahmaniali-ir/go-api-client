import { Component, Input } from '@angular/core';
import { Article } from '../../types/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.sass'],
})
export class ArticleListComponent {
  @Input() list: Article[] = [];

  constructor(private blog: BlogService) {}

  trackById(index: number) {
    return this.list ? this.list[index].id : 0;
  }
}
