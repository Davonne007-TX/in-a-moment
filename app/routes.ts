import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("dessert", "./routes/dessert/dessert.tsx"),
  route("carnival", "./routes/carnival/carnival.tsx"),
] satisfies RouteConfig;
