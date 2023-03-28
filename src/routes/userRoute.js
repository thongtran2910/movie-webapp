import LayoutTheme from "../HOC/LayoutTheme";
import DetailPage from "../pages/detail/DetailPage";
import ExplorePage from "../pages/explore/ExplorePage";
import HomePage from "../pages/home/HomePage";
import SearchPage from "../pages/search/SearchPage";

export const userRoute = [
  {
    path: "/",
    component: <LayoutTheme Component={HomePage} />,
    exact: true,
    isUseLayout: true,
  },
  {
    path: "/explore",
    component: <LayoutTheme Component={ExplorePage} />,
    isUseLayout: true,
  },
  {
    path: `/:category/:id`,
    component: <LayoutTheme Component={DetailPage} />,
    isUseLayout: true,
  },
  {
    path: "/search",
    component: <LayoutTheme Component={SearchPage} />,
    isUseLayout: false,
  },
];
