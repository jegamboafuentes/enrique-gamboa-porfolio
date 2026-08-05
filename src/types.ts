export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  updated_at: string;
  topics?: string[];
  owner: {
    avatar_url: string;
  };
}

export interface MediumArticle {
  title: string;
  description: string;
  mainImage: string | null;
  link: string;
  categories?: string[];
}
