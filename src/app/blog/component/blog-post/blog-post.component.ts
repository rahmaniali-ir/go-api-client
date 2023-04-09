import { Component, Input } from '@angular/core';
import { Article } from '../../types/blog';

@Component({
  selector: 'blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.sass'],
})
export class BlogPostComponent {
  @Input() article: Article = {
    id: 0,
    title: '',
    description: '',
    content: '',
  };
}
