import { Component, Input } from '@angular/core';
import { Article } from '../../types/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.sass'],
})
export class PostListComponent {
  @Input() list: Article[] = [];

  constructor(private blog: BlogService) {}

  trackById(index: number) {
    return this.list ? this.list[index].id : 0;
  }

  openPost(post: Article) {
    this.blog.openPost(post.id);
  }
}
