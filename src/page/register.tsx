
import { AuthForm } from "../components/forma/forma";
import { useAppDispatch } from "../hooks/hook-redux";
import { register } from "../redux/auth/authOperation";


const Registration = () => {
  const dispatch = useAppDispatch();
  const handleRegister = (formData: { email: string; password: string }) => {
    dispatch(register(formData));
  };

  return (
    <AuthForm
      title="Registration"
      buttonText="Register"
      linkText="Already have an account? "
      NavText="Login"
      linkPath="/login"
      includeNameField={true}
      onSubmit={handleRegister}
    />
  );
};

export default Registration;
