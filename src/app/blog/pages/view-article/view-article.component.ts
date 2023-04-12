import { Component, OnInit } from '@angular/core';
import { Article } from '../../types/blog';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { emptyArticle } from '../../config/article';

@Component({
  selector: 'view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.sass'],
})
export class ViewArticleComponent implements OnInit {
  article: Article = emptyArticle;

  constructor(private route: ActivatedRoute, private blog: BlogService) {}

  ngOnInit(): void {
    this.getArticle();
  }

  get id() {
    return Number(this.route.snapshot.paramMap.get('id') || 0);
  }

  getArticle() {
    const article = this.blog.getArticle(this.id);

    if (article) this.article = article;
  }
}
