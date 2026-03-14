import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("wings", "./routes/wings/wings.tsx"),
] satisfies RouteConfig;
