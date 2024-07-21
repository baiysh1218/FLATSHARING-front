import Auth from "../../entities/auth/auth/Auth";
import Details from "../../entities/details/Details";
import Home from "../../pages/home/HomePage";

export const PUBLIC_ROUTES = [
  { path: "/", component: Home, id: 1 },
  {
    path: "/registration",
    component: Auth,
    id: 2,
  },
  {
    path: "/details/:id",
    component: Details,
    id: 3,
  },
];
