import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/layout";
import { lazy, useEffect } from "react";
import { useAppDispatch } from "./hooks/hook-redux";
import { currentUser } from "./redux/auth/authOperation";
import { PrivateRoute } from "./utils/router/privateRoute";
import { RestrictedRoute } from "./utils/router/restrictedRoute";

const ChatsPage = lazy(() => import("./page/chats-page"));
const Login = lazy(() => import("./page/login"));
const Registration = lazy(() => import("./page/register"));
const Settings = lazy(() => import("./page/settings"));
const Chat = lazy(() => import("./components/chat/chat"));
const users = lazy(() => import("./page/users"));

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(currentUser()); 
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="login"
          element={
            <RestrictedRoute component={Login} redirectTo={"/messages"} />
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute
              component={Registration}
              redirectTo={"/messages"}
            />
          }
        />
        <Route
          index
          element={<PrivateRoute component={ChatsPage} redirectTo={"/login"} />}
        />
        <Route
          path="messages"
          element={<PrivateRoute component={ChatsPage} redirectTo={"/login"} />}
        >
          <Route path=":id" Component={Chat} />
        </Route>
        <Route
          path="users"
          element={<PrivateRoute component={users} redirectTo={"/messages"} />}
        />
        <Route
          path="settings"
          element={<PrivateRoute component={Settings} redirectTo={"/login"} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
