import React, { FormEvent } from "react";
import { NavLink } from "react-router-dom";
import { Input } from "./custom-input"; // Припускаю, що це компонент з використанням TypeScript
import s from "./login.module.scss";

interface AuthFormProps {
  title: string;
  buttonText: string;
  linkText: string;
  linkPath: string;
  includeNameField?: boolean;
  onSubmit: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({
  title,
  buttonText,
  linkText,
  linkPath,
  includeNameField = false,
  onSubmit,
}) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <section className={s.container}>
      <div className={s.loginBox}>
        <form onSubmit={handleSubmit}>
          <h2>{title}</h2>
          <Input type="email" label="Email" />
          <Input type="password" label="Password" />
          {includeNameField && <Input type="text" label="Name" />}
          <button type="submit">{buttonText}</button>
          <div className={s.registerLink}>
            <p>
              {linkText} <NavLink to={linkPath}>{linkText}</NavLink>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AuthForm;
