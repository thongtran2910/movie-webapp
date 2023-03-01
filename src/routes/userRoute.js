import LayoutTheme from "../HOC/LayoutTheme";
import HomePage from "../pages/home/HomePage";

export const userRoute = [
  {
    path: "/",
    component: <LayoutTheme Component={HomePage} />,
    exact: true,
    isUseLayout: true,
  },
];
