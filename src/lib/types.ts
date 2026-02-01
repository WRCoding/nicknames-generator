// Types for the nicknames generator

export interface Nickname {
  id: string;
  name: string;
  category: string;
  tags?: string[];
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
  color: "pink" | "purple" | "cyan" | "blue" | "green" | "yellow";
  subCategories?: SubCategory[];
  seoTitle: string;
  seoDescription: string;
}

export interface SubCategory {
  slug: string;
  name: string;
  icon: string;
  parentSlug: string;
}

export interface GeneratorResult {
  nicknames: string[];
  category?: string;
}
