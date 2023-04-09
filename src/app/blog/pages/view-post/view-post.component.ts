import { Component, OnInit } from '@angular/core';
import { Article } from '../../types/blog';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.sass'],
})
export class ViewPostComponent implements OnInit {
  post: Article = {
    id: 0,
    title: '',
    description: '',
    content: '',
  };

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
