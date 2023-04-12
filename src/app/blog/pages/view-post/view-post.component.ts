import { Component, OnInit } from '@angular/core';
import { Article } from '../../types/blog';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { emptyArticle } from '../../config/article';

@Component({
  selector: 'view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.sass'],
})
export class ViewPostComponent implements OnInit {
  post: Article = emptyArticle;

  constructor(private route: ActivatedRoute, private blog: BlogService) {}

  ngOnInit(): void {
    this.getPost();
  }

  get id() {
    return Number(this.route.snapshot.paramMap.get('id') || 0);
  }

  getPost() {
    const post = this.blog.getPost(this.id);

    if (post) this.post = post;
  }
}
