import { gql } from 'graphql-request';

export const GRAPHQL_FRAGMENTS = gql`
  fragment coverPost on UploadFile {
  name
  url
}

fragment authorPost on Author {
  name
  image {
    data {
      attributes {
        name
        url
      }
    }
  }
}

fragment categoryPost on Category {
  name
  image {
    data {
      attributes {
        name
        url
      }
    }
  }
}

fragment tagPost on Tag {
  name
  image {
    data {
      attributes {
        name
        url
      }
    }
  }
}

fragment post on Post {
  title
  slug
  excerpt
  content
  cover {
    data {
      attributes {
        ...coverPost
      }
    }
  }
  author {
    data {
      attributes {
        ...authorPost
      }
    }
  }
  categories {
    data {
      attributes {
        ...categoryPost
      }
    }
  }
  tags {
    data {
      attributes {
        ...tagPost
      }
    }
  }
  createdAt
}
`;
