import Link from "next/link";
import { Post } from "types/graphql/graphql"

type setTypePost = {
  post: Post;
}

export default function PostCard({ post }: setTypePost,): JSX.Element {

  return (
    <Link href={post.uri}>
      <a className="card">
        <h3>{post.title} &rarr;</h3>
      </a>
    </Link>
  );
}
