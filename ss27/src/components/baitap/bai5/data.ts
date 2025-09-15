import { Posts } from "./types";

export const posts: Post[] = [
  {
    id: 1,
    title: "React Router cơ bản",
    excerpt: "Giới thiệu về React Router và cách cài đặt.",
    content:
      "React Router là thư viện mạnh mẽ giúp điều hướng trong ứng dụng React. Nó hỗ trợ nhiều tính năng như route động, nested routes, lazy loading..."
  },
  {
    id: 2,
    title: "Hiểu về JSX",
    excerpt: "JSX là cú pháp mở rộng cho JavaScript.",
    content:
      "JSX giúp viết UI bằng cú pháp giống HTML trong JavaScript. Nó được biên dịch thành React.createElement(). JSX làm code trực quan và dễ đọc."
  },
  {
    id: 3,
    title: "Quản lý state trong React",
    excerpt: "State là dữ liệu thay đổi theo thời gian.",
    content:
      "State quản lý dữ liệu động trong React. useState dùng cho state cục bộ, Redux/Context cho state toàn cục. Hiểu rõ state giúp viết code hiệu quả."
  },
  {
    id: 4,
    title: "Props trong React",
    excerpt: "Props là cách truyền dữ liệu từ cha xuống con.",
    content:
      "Props cho phép component cha truyền dữ liệu cho con. Props là immutable, không thay đổi trong component con. Đây là cơ chế quan trọng trong React."
  },
  {
    id: 5,
    title: "Lifecycle trong React",
    excerpt: "React có nhiều hook hỗ trợ lifecycle.",
    content:
      "useEffect được dùng để xử lý side effects, tương ứng với lifecycle methods cũ như componentDidMount, componentDidUpdate. Hiểu lifecycle giúp tối ưu hiệu năng."
  }
];
