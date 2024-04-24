import React, { useState, useEffect } from "react";
import LogoImg from "../src/assets/kocaelilogo.png";
import { motion } from "framer-motion";
import { TextField } from "@mui/material";
import { styles, useFormInput, handleSubmit } from "./formHandlers";

interface UseFormInputProps {
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
interface LoginFormProps {
  className?: string;
}
function LoginForm({ className }: LoginFormProps): JSX.Element {
  const emailInput: UseFormInputProps = useFormInput("");
  const passwordInput: UseFormInputProps = useFormInput("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  useEffect(() => {
    const rememberMeState = localStorage.getItem("rememberMe");
    if (rememberMeState === "true") {
      setRememberMe(true);
      const rememberedEmail = localStorage.getItem("rememberedEmail") || "";
      const rememberedPassword =
        localStorage.getItem("rememberedPassword") || "";
      emailInput.onChange({
        target: { value: rememberedEmail },
      } as React.ChangeEvent<HTMLInputElement>);
      passwordInput.onChange({
        target: { value: rememberedPassword },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  }, []);

  const handleRememberMeChange = (): void => {
    setRememberMe(!rememberMe);
    localStorage.setItem("rememberMe", String(!rememberMe));
  };

  const handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (rememberMe) {
      localStorage.setItem("rememberedEmail", emailInput.value);
      localStorage.setItem("rememberedPassword", passwordInput.value);
    }
    handleSubmit(event, emailInput.value, passwordInput.value);
  };

  return (
    <div style={styles.cardStyle as React.CSSProperties}>
      <div style={styles.loginSectionStyle as React.CSSProperties}>
        <div style={{ textAlign: "center", marginTop: "-48px" }}>
          <img
            src={LogoImg}
            alt="Logo"
            style={{
              width: "35%",
              margin: "19px auto",
              marginTop: "66px",
              display: "block",
            }}
          />
        </div>
        <form onSubmit={handleLoginSubmit}>
          <div style={styles.formGroupStyle as React.CSSProperties}>
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              id="email"
              required
              fullWidth
              margin="normal"
              {...emailInput}
            />
          </div>
          <div style={styles.formGroupStyle as React.CSSProperties}>
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              id="password"
              required
              fullWidth
              margin="normal"
              {...passwordInput}
            />
          </div>
          <div style={styles.checkboxStyle as React.CSSProperties}>
            <input
              type="checkbox"
              id="remember-me"
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            <label
              style={styles.checkboxLabelStyle as React.CSSProperties}
              htmlFor="remember-me"
            >
              Remember me
            </label>
          </div>
          <div
            style={styles.forgotPasswordContainerStyle as React.CSSProperties}
          >
            <a
              href="#"
              style={styles.forgotPasswordStyle as React.CSSProperties}
            >
              Forgot password
            </a>
          </div>
          <motion.button
            style={styles.buttonStyle as React.CSSProperties}
            type="submit"
            variants={styles.buttonVariants}
            whileHover="hover"
          >
            <h2 style={styles.loginingStyle as React.CSSProperties}>Login</h2>
          </motion.button>
        </form>
        <a
          href="/signup"
          style={{
            ...(styles.linkStyle as React.CSSProperties),
            marginBottom: "15px",
          }}
        >
          Sign up
        </a>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "10px",
            marginBottom: "0px",
          }}
        >
          <hr style={{ width: "40%", borderTop: "1px solid #ccc" }} />
          <span
            style={{ margin: "0 10px", fontFamily: "'Roboto', sans-serif" }}
          >
            or
          </span>
          <hr style={{ width: "40%", borderTop: "1px solid #ccc" }} />
        </div>

        <motion.button
          style={styles.edevletButtonStyle as React.CSSProperties}
          type="submit"
          variants={styles.buttonVariants}
          whileHover="hover"
        ></motion.button>
      </div>
      <div style={styles.infoSectionStyle as React.CSSProperties}></div>
    </div>
  );
}

export default LoginForm;
