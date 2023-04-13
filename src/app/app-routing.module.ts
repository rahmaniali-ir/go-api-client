import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './blog/pages/landing-page/landing-page.component';
import { ViewArticleComponent } from './blog/pages/view-article/view-article.component';
import { BlogOutletComponent } from './blog/component/blog-outlet/blog-outlet.component';

const routes: Routes = [
  {
    path: 'dashboard',
    pathMatch: 'full',
    loadChildren: () =>
      import('src/app/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: '',
    component: BlogOutletComponent,
    children: [
      {
        path: 'article/:id',
        component: ViewArticleComponent,
      },
      {
        path: '',
        component: LandingPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
