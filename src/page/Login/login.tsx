import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import s from "./login.module.scss";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <section className={s.container}>
      <div className={s.loginBox}>
        <form>
          <h2>Login</h2>
          <div className={s.inputBox}>
            <span className={s.icon}>
              <MdOutlineEmail />
            </span>
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className={s.inputBox}>
            <span className={s.icon}>
              <RiLockPasswordLine />
            </span>
            <input type="password" required />
            <label>Password</label>
          </div>
          <button>Login</button>
          <div className={s.registerLink}>
            <p>Don't have an account? <NavLink to="/" >Register</NavLink> </p>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Login;
