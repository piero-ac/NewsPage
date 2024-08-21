type NewsImage = {
  thumbnail: string;
  thumbnailProxied: string;
};

type SubNews = {
  title: string;
  snippet: string;
  publisher: string;
  timestamp: string;
  newsUrl: string;
  images: NewsImage;
};

type NewsItem = {
  title: string;
  snippet: string;
  publisher: string;
  timestamp: string;
  newsUrl: string;
  images: NewsImage;
  hasSubnews: boolean;
  subnews: SubNews[];
};
