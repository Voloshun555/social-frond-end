import React, { FormEvent, useState } from "react";
import {
  MdOutlineEmail,
  MdOutlineDriveFileRenameOutline,
} from "react-icons/md";
import { Input } from "./custom-input";
import s from "./settingsForm.module.scss";
import { useAppSelector } from "../../hooks/hook-redux";

interface AuthFormProps {
  title: string;
  buttonText: string;
  includeNameField?: boolean;
  onSubmit: (data: { email: string; name: string }) => void;
}

export const SettingsForm: React.FC<AuthFormProps> = ({
  title,
  buttonText,
  includeNameField = false,
  onSubmit,
}) => {
  const user = useAppSelector((state) => state.auth.user);

  const initialFormData = {
    email: user.email,
    name: user.name,
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <section className={s.container}>
      <div className={s.settingsBox}>
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
          <button type="submit">{buttonText}</button>
        </form>
      </div>
    </section>
  );
};
