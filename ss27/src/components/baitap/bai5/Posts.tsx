import { Link } from "react-router-dom";
import { posts } from "../data";

export default function Posts() {
  return (
    <div>
      <h2>Danh sách bài viết</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: "1rem" }}>
            <h3>
              <Link to={`/blog/posts/${post.id}`}>{post.title}</Link>
            </h3>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
