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
