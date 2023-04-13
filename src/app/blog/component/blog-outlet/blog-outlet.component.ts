import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'blog-outlet',
  templateUrl: './blog-outlet.component.html',
  styleUrls: ['./blog-outlet.component.sass'],
})
export class BlogOutletComponent {
  constructor(private router: Router) {}

  goToRootPage() {
    this.router.navigate(['/']);
  }
}
