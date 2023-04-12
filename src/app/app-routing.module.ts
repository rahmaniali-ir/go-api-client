import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './blog/pages/landing-page/landing-page.component';
import { ViewArticleComponent } from './blog/pages/view-article/view-article.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingPageComponent,
  },
  {
    path: 'article/:id',
    component: ViewArticleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
