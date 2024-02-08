import React, { FormEvent, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  MdOutlineEmail,
  MdOutlineDriveFileRenameOutline,
} from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Input } from "./custom-input";
import s from "./forma.module.scss";

interface AuthFormProps {
  title: string;
  buttonText: string;
  NavText: string;
  linkText: string;
  linkPath: string;
  includeNameField?: boolean;
  onSubmit: (data: { email: string; password: string; name?: string }) => void;
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
  const initialFormData = {
    email: "",
    password: "",
    name: includeNameField ? "" : undefined,
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (name: string, value: string) => {
  
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData(initialFormData); // Очищуємо стан форми після відправки
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
              value={formData.name || ""}
              onChange={(value) => handleInputChange("name", value)}
            />
          )}
          <Input
            type="email"
            label="Email"
            icon={<MdOutlineEmail />}
            value={formData.email}
            onChange={(value) => handleInputChange("email", value)}
          />
          <Input
            type="password"
            label="Password"
            icon={<RiLockPasswordLine />}
            value={formData.password}
            onChange={(value) => handleInputChange("password", value)}
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

 
