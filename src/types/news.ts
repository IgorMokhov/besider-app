export interface IMultimedia {
  subType: 'thumbLarge' | 'thumbnail';
  url: string;
}

export interface IArticle {
  abstract: string;
  web_url: string;
  pub_date: string;
  source: string;
  multimedia: IMultimedia[];
}

export interface IGetNewsResponse {
  response: {
    docs: IArticle[];
  };
}

export interface IGetNewsRequest {
  year?: number;
  month?: number;
}

export interface INewsItem {
  title: string;
  url: string;
  date: string;
  source: string;
  imageUrl: string;
}
