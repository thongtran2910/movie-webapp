import LayoutTheme from "../HOC/LayoutTheme";
import AuthPage from "../pages/auth/AuthPage";
import DetailPage from "../pages/detail/DetailPage";
import ExplorePage from "../pages/explore/ExplorePage";
import FavoritePage from "../pages/favorite/FavoritePage";
import HistoryPage from "../pages/history/HistoryPage";
import HomePage from "../pages/home/HomePage";
import SearchPage from "../pages/search/SearchPage";
import WatchPage from "../pages/watch/WatchPage";

export const userRoute = [
  {
    path: "/",
    component: <LayoutTheme Component={HomePage} />,
    exact: true,
  },
  {
    path: "/explore",
    component: <LayoutTheme Component={ExplorePage} />,
  },
  {
    path: `/:category/:id`,
    component: <LayoutTheme Component={DetailPage} />,
  },
  {
    path: "/search",
    component: <LayoutTheme Component={SearchPage} />,
  },
  {
    path: "/auth",
    component: <LayoutTheme Component={AuthPage} />,
  },
  {
    path: "/favorite",
    component: <LayoutTheme Component={FavoritePage} />,
  },
  {
    path: "/history",
    component: <LayoutTheme Component={HistoryPage} />,
  },
  {
    path: "/:category/watch/:id",
    component: <WatchPage />,
  },
];
