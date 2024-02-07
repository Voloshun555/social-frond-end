
import { AuthForm } from "../components/forma/forma";


const Registration = () => {
  const handleRegister = () => {
    // Логіка реєстрації
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
