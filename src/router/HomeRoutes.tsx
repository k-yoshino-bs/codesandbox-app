import { Home } from "../components/pages/Home";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";
import { Page404 } from "../components/pages/Page404";

export const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    path: "/user_management",
    exact: true,
    children: <UserManagement />
  },
  {
    path: "/setting",
    exact: true,
    children: <Setting />
  },
  {
    path: "*",
    exact: true,
    children: <Page404 />
  }
];
