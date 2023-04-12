import { Injectable } from '@angular/core';
import { Category } from '../types/category';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories: Category[] = [];

  constructor(private api: ApiService) {}

  fetchAllCategories() {
    this.api.get<Category[]>('categories').subscribe((response) => {
      this.categories = response.body;
    });
  }

  getCategoryById(id: number) {
    return this.categories.find((category) => category.id === id);
  }

  getCategoriesById(ids: number[]) {
    const categories: Category[] = [];

    ids.forEach((id) => {
      const category = this.getCategoryById(id);

      if (category) categories.push(category);
    });

    return categories;
  }
}
