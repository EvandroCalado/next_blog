export type ImageCategoryStrapi = {
  data: {
    attributes: {
      name: string;
      url: string;
    };
  };
};

export type AuthorStrapi = {
  data: {
    id: number;
    attributes: {
      name: string;
      resume: string;
      image: ImageCategoryStrapi;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
};

export type CategoryStrapi = {
  id: number;
  attributes: {
    name: string;
    image: ImageCategoryStrapi;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
};

export type CategoriesStrapi = {
  data: CategoryStrapi[];
};

export type TagStrapi = {
  attributes: {
    name: string;
  };
};

export type TagsStrapi = {
  data: TagStrapi[];
};

export type FormatCoverStrapi = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
};

export type CoverStrapi = {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string;
      caption: string;
      width: number;
      height: number;
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: null;
      provider: string;
      createdAt: string;
      updatedAt: string;
      formats: {
        large: FormatCoverStrapi;
        small: FormatCoverStrapi;
        medium: FormatCoverStrapi;
        thumbnail: FormatCoverStrapi;
      };
    };
  };
};

export type PostStrapi = {
  id: number;
  attributes: {
    title: string;
    excerpt: string;
    content: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    cover: CoverStrapi;
    author: AuthorStrapi;
    categories: CategoriesStrapi;
    tags: TagsStrapi;
  };
};

export type MetaStrapi = {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
};

export type PostsStrapi = {
  data: PostStrapi[];
  meta: MetaStrapi;
};

export type PaginationNext = {
  nextPage: number;
  previusPage: number;
  numberOfPosts: number;
  postsPerPage: number;
  category?: string;
  author?: string;
  tag?: string;
  title?: string;
};
