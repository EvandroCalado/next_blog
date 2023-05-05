import { PostsStrapi } from '../typing/posts';

export type AuthorDataProps = {
  title: string;
  resume: string;
  image: string;
  alt: string;
};

export type CategoryDataProps = {
  title: string;
  image: string;
  alt: string;
};

export type TagDataProps = {
  name: string;
};

export type PostsDataProps = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  createdAt: string;
  cover: string;
  author: AuthorDataProps;
  categories: CategoryDataProps[];
  tags: TagDataProps[];
};

export const mapPosts = (posts: PostsStrapi) => {
  return posts?.data.map((post): PostsDataProps => {
    return {
      id: post.id,
      title: post.attributes.title,
      excerpt: post.attributes.excerpt,
      content: post.attributes.content,
      slug: post.attributes.slug,
      createdAt: post.attributes.createdAt,
      cover: post.attributes.cover.data.attributes.url,
      author: {
        title: post.attributes.author.data.attributes.name,
        resume: post.attributes.author.data.attributes.resume,
        image: post.attributes.author.data.attributes.image.data.attributes.url,
        alt: post.attributes.author.data.attributes.image.data.attributes.name,
      },
      categories: post.attributes.categories.data.map((category) => {
        return {
          title: category.attributes.name,
          image: category.attributes.image.data.attributes.url,
          alt: category.attributes.image.data.attributes.name,
        };
      }),
      tags: post.attributes.tags.data.map((tag) => {
        return {
          name: tag.attributes.name,
        };
      }),
    };
  });
};
