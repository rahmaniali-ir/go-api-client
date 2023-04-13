import { Component, OnInit } from '@angular/core';
import { Article } from '../../types/blog';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.sass'],
})
export class ViewArticleComponent implements OnInit {
  article?: Article;
  loading = true;

  constructor(private route: ActivatedRoute, private blog: BlogService) {}

  ngOnInit(): void {
    this.getArticle();
  }

  get id() {
    return Number(this.route.snapshot.paramMap.get('id') || 0);
  }

  getArticle() {
    this.blog.getArticle(this.id).subscribe({
      next: (article) => {
        this.loading = false;
        this.article = article;
      },
      error: () => {
        this.loading = false;
      },
    });
  }
}
