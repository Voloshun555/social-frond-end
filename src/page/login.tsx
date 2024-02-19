import { AuthForm } from "../components/forma/forma";
import { logIn } from "../redux/auth/authOperation";
import { useAppDispatch } from "../hooks/hook-redux";

const Login = () => {
  const dispatch = useAppDispatch();
  const handleLogin = (formData: { email: string; password: string }) => {
    dispatch(logIn(formData)); 
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
