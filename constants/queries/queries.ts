const gql = String.raw;

export const getBlogs = gql`
const query = 
    query GetPost($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        title
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  `;


export const getPosts = gql`
const query = 
    query getPosts($first: Int!) {
     posts(first: $first) {
        nodes {
          id
          title
          slug
          excerpt
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `;
