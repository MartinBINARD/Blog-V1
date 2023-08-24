export interface Category {
  id: number;
  slug: string;
  name: string;
}

export interface Post {
  id: number;
  CategoryId;
  slug: string;
  name: string;
  title: string;
  excerpt: string;
  content: string;
  category: {
    id: number;
    slug: string;
    name: string;
  };
}
