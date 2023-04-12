import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { userRoute } from "./routes/userRoute";
import "./App.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./firebase/firebaseConfig";
import { setCurrentUser } from "./redux/actions/userAction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {userRoute.map((route, index) => {
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
