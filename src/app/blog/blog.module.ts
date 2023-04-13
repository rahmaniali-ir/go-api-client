import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCardComponent } from './component/article-card/article-card.component';
import { ArticleListComponent } from './component/article-list/article-list.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ViewArticleComponent } from './pages/view-article/view-article.component';
import { FormsModule } from '@angular/forms';
import { CategorySelectorComponent } from './component/category-selector/category-selector.component';
import { CategoryLabelComponent } from './component/category-label/category-label.component';
import { CategoryListComponent } from './component/category-list/category-list.component';
import { BlogOutletComponent } from './component/blog-outlet/blog-outlet.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    ArticleCardComponent,
    ArticleListComponent,
    LandingPageComponent,
    ViewArticleComponent,
    CategorySelectorComponent,
    CategoryLabelComponent,
    CategoryListComponent,
    BlogOutletComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule, CoreModule],
  exports: [ArticleCardComponent, ArticleListComponent],
})
export class BlogModule {}
