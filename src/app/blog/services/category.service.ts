import { Injectable } from '@angular/core';
import { Category } from '../types/category';
import { ApiService } from 'src/app/core/services/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories: Category[] = [];

  constructor(private api: ApiService) {}

  fetchAllCategories() {
    return new Observable<Category[]>((subscriber) => {
      this.api.get<Category[]>('categories').subscribe({
        next: (response) => {
          this.categories = response.body;

          subscriber.next(this.categories);
          subscriber.complete();
        },
        error: (err) => {
          subscriber.error(err);
          subscriber.complete();
        },
      });
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
