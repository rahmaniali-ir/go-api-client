import { Component, Input } from '@angular/core';
import { Category } from '../../types/category';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.sass'],
})
export class CategoryListComponent {
  @Input() list: Category[] = [];

  trackById(index: number) {
    return this.list ? this.list[index] : 0;
  }
}
