import path from "path";
import Auth from "../../entities/auth/auth/Auth";
import Details from "../../entities/details/Details";
import Browse from "../../pages/browse/Browse";
import Home from "../../pages/home/HomePage";
import PersonalAccount from "../../pages/account/PersonalAccount";

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

  {
    path: "/browse",
    component: Browse,
    id: 4,
  },
  { path: "/account/:slug", component: PersonalAccount, id: 5 },
];
