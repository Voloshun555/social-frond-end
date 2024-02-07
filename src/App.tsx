import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/layout";
import { lazy } from "react";

const ChatsPage = lazy(() => import("./page/chats-page"));
const Login = lazy(() => import("./page/Login/login"));

function App() {
  return (
    <Routes>
      <Route path="Login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<ChatsPage />} />
      </Route>
      ;
    </Routes>
  );
}

export default App;
