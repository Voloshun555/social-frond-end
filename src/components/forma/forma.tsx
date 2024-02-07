import React, { FormEvent } from "react";
import { NavLink } from "react-router-dom";
import {
  MdOutlineEmail,
  MdOutlineDriveFileRenameOutline,
} from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Input } from "./custom-input"; 
import s from "./login.module.scss";

interface AuthFormProps {
  title: string;
  buttonText: string;
  NavText: string;
  linkText: string;
  linkPath: string;
  includeNameField?: boolean;
  onSubmit: () => void;
}

export const AuthForm: React.FC<AuthFormProps> = ({
  title,
  buttonText,
  NavText,
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
          {includeNameField && (
            <Input
              type="text"
              label="Name"
              icon={<MdOutlineDriveFileRenameOutline />}
            />
          )}
          <Input type="email" label="Email" icon={<MdOutlineEmail />} />
          <Input
            type="password"
            label="Password"
            icon={<RiLockPasswordLine />}
          />
          <button type="submit">{buttonText}</button>
          <div className={s.registerLink}>
            <p>
              {linkText} <NavLink to={linkPath}>{NavText}</NavLink>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};
