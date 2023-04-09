import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPostComponent } from './component/blog-post/blog-post.component';
import { PostListComponent } from './component/post-list/post-list.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ViewPostComponent } from './pages/view-post/view-post.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BlogPostComponent,
    PostListComponent,
    LandingPageComponent,
    ViewPostComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [BlogPostComponent, PostListComponent],
})
export class BlogModule {}
