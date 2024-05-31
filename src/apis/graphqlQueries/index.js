import {gql} from '@apollo/client';

const GET_REPOSITORIES = gql`
  query GetRepositories {
    viewer {
      repositories(first: 100) {
        # Adjust "first" for desired number of repos
        edges {
          node {
            name
            url
            # Add other desired repository fields here (e.g., description, stargazers)
          }
        }
      }
    }
  }
`;
const GET_COMMITS = gql`
  query GetCommits($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      ref(qualifiedName: "ft-react-email") {
        target {
          ... on Commit {
            history(first: 20) {
              edges {
                node {
                  commit {
                    message
                    author {
                      name
                    }
                    committedDate
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export {GET_REPOSITORIES, GET_COMMITS};
