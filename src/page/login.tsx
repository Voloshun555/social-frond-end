import React from "react";
import { AuthForm } from "../components/forma/forma";

const Login = () => {
  const handleLogin = () => {
    // Додаткова логіка для входу
  };

  return (
    <AuthForm
      title="Login"
      buttonText="Login"
      linkText="Don't have an account?"
      NavText="Register"
      linkPath="/register"
      onSubmit={handleLogin}
    />
  );
};

export default Login;
