import Footer from "../components/Footer";
import Header from "components/Header";
import PostCard from "../components/PostCard";
import { client } from "../lib/apollo";
import { gql } from "@apollo/client";
import { Post } from "types/graphql/graphql"

type typeOfPost = {
  posts: Post[];
}

export default function Home({ posts }: typeOfPost): JSX.Element {
  return (

    <div className="container">
      <Header></Header>
      <main>
        <h1 className="title">Welcome</h1>

        <p className="description">
          Here is a list of stories about me generated by ChatGPT
        </p>

        <div className="grid">
          {posts.map((post) => {
            return <PostCard key={post.uri} post={post}></PostCard>;
          })}
        </div>
      </main>

      <Footer></Footer>
    </div>
  );
}

export async function getStaticProps() {
  const GET_POSTS = gql`
    query GetCalendarEvents {
      category(id: "blog_post", idType: NAME) {
        posts {
          nodes {
            uri
            title
            content
          }
        }
      }
    }
  `;

  const response = await client.query({
    query: GET_POSTS,
  });
  const posts = response?.data?.category?.posts?.nodes;
  return {
    props: {
      posts,
    },
  };
}
