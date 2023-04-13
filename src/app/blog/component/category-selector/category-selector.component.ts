import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../../types/category';

@Component({
  selector: 'category-selector',
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.sass'],
})
export class CategorySelectorComponent {
  _categories: Category[] = [];

  @Input()
  selected?: Category;
  @Output() selectedChange = new EventEmitter<Category>();

  @Input() set categories(categories: Category[]) {
    this._categories = categories;

    if (!this.selected && categories.length) {
      setTimeout(() => {
        this.select(categories[0]);
      });
    }
  }

  trackById(index: number) {
    return this.categories ? this.categories[index].id : 0;
  }

  select(category: Category) {
    this.selected = category;
    this.selectedChange.emit(category);
  }
}
