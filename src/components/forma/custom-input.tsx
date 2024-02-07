import s from "./login.module.scss";

interface InputProps {
  type: string;
  label: string;
  icon?: string;
}

export const Input: React.FC<InputProps> = ({ type, label, icon }) => {
  return (
    <div className={s.inputBox}>
      <span className={s.icon}>{icon}</span>
      <input type={type} required />
      <label>{label}</label>
    </div>
  );
};
