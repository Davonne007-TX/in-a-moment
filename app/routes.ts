import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("dessert", "./routes/dessert/dessert.tsx"),
] satisfies RouteConfig;
