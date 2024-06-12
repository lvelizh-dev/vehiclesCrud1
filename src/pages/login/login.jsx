import React from "react";
import styles from "./login.module.scss";

const Login = () => {
  return (
    <div className={styles.login_container}>
      <div className={styles.login_card}>
        <div className={styles.login_inputs}>
          <p className={styles.login_title}>Sign in</p>
          <p className={styles.login_username_label}>Username</p>
          <input type="text" className={styles.login_username} />
          <p className={styles.login_password_label}>Password</p>
          <input type="password" className={styles.login_password} />
        </div>
      </div>
    </div>
  );
};

export default Login;
