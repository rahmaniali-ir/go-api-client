import { Article, ArticleResponse } from '../types/blog';

export function getArticleCategoryIds(ids: string) {
  return ids.split(',').map((id) => Number(id));
}

export function getArticleWithCategories(article: ArticleResponse): Article {
  return {
    ...article,
    categories: getArticleCategoryIds(article.categories),
  };
}
