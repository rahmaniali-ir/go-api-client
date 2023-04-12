import { Component, HostBinding, Input } from '@angular/core';
import { Category } from '../../types/category';

@Component({
  selector: 'category-label',
  templateUrl: './category-label.component.html',
  styleUrls: ['./category-label.component.sass'],
})
export class CategoryLabelComponent {
  @Input() category: Category = {
    id: 0,
    title: '',
    description: '',
    color: '',
  };

  @HostBinding('attr.title') get title() {
    return this.category.description;
  }
}
