import { gql } from 'graphql-request';
import { GRAPHQL_FRAGMENTS } from './fragments';

export const GET_POSTS = gql`
  ${GRAPHQL_FRAGMENTS}

  query GET_POSTS(
  $category: String
  $author: String
  $tag: String
  $slug: String
  $title: String
  $sort: [String] = "createdAt:desc"
  $start: Int = 0
  $limit: Int = 6
) {
  posts(
    pagination: {
      start: $start
      limit: $limit
    }
    sort: $sort
    filters: {
      categories: {
        name: { containsi: $category }
      }
      author: {
        name: { containsi: $author }
      }
      tags: {
        name: { containsi: $tag }
      }
      slug: { containsi: $slug }
      title: { containsi: $title }
    }
  ) {
    data {
      id
      attributes {
        ...post
      }
    }
    meta {
      pagination {
        total
        page
        pageSize
        pageCount
      }
    }
  }
}
`;

export const GET_SETTING = gql`

query GET_SETTINGS {
  setting {
    data {
      attributes {
        title
        description
        avatar {
          data {
            attributes {
              name
              url
            }
          }
        }
        footer
      }
    }
  }
 }
`;
