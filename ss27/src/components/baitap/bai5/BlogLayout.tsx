import { Link, Outlet } from "react-router-dom";

export default function BlogLayout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <aside style={{ width: "200px", background: "#f5f5f5", padding: "1rem" }}>
        <h2>My Blog</h2>
        <nav>
          <ul>
            <li>
              <Link to="posts">Posts</Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Nội dung chính */}
      <main style={{ flex: 1, padding: "1rem" }}>
        <Outlet />
      </main>
    </div>
  );
}
