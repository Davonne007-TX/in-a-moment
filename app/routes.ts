import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("dessert", "./routes/dessert/dessert.tsx"),
  route("carnival", "./routes/carnival/carnival.tsx"),
  route("grub", "./routes/grub/grub.tsx"),
] satisfies RouteConfig;
