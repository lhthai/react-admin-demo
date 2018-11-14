import Posts from "./views/components/Posts";
import Users from "./views/components/Users";

const routes = [
  { path: "/users", exact: true, component: Users },
  { path: "/posts", exact: true, component: Posts }
];

export default routes;
