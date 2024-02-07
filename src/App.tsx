import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/layout";
import { lazy } from "react";

const ChatsPage = lazy(() => import("./page/chats-page"));
const Login = lazy(() => import("./page/login"));
const Registration = lazy(() => import("./page/register"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ChatsPage />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Registration />} />
      </Route>
      ;
    </Routes>
  );
}

export default App;
