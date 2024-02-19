import React from "react";
import s from "./settingsForm.module.scss";


interface InputProps {
  type: string;
  label: string;
  icon?: React.ReactNode;
  value: string; 
  onChange: (value: string) => void; 
}

export const Input: React.FC<InputProps> = ({
  type,
  label,
  icon,
  value,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onChange(newValue);
  };

  return (
    <div className={s.inputBox}>
      <span className={s.icon}>{icon}</span>
      <input type={type} value={value} onChange={handleChange} required />
      <label>{label}</label>
    </div>
  );
};
