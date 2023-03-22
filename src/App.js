import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { userRoute } from "./routes/userRoute";
import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {userRoute.map((route, index) => {
            if (route.isUseLayout) {
              return (
                <Route
                  key={index}
                  exact={route.exact}
                  path={route.path}
                  element={route.component}
                />
              );
            }
            return (
              <Route
                key={index}
                exact={route.exact}
                path={route.path}
                element={route.component}
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
