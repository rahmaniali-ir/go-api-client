interface BaseArticle {
  id: number;
  title: string;
  cover: string;
  description: string;
  content: string;
  timestamp: number;
}

export interface Article extends BaseArticle {
  categories: number[];
}

export interface ArticleResponse extends BaseArticle {
  categories: string;
}

export interface ArticleContent {
  id: number;
  content: string;
}
