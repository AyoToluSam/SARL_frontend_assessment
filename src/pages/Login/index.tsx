import FormElement from "@/components/core/Form/FormElement";
import styles from "./_styles.module.scss";
import { FormProvider, useForm } from "react-hook-form";
import Button from "@/components/core/Button";
import { Link, useNavigate } from "react-router";
import { Credentials } from "@/store/app/auth/Login/types";
import { useLoginMutation } from "@/store/app/auth/Login/slice";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const methods = useForm<Credentials>({ mode: "all" });
  const { handleSubmit } = methods;

  const [login] = useLoginMutation();

  const onSubmit = (data: Credentials) => {
    login(data)
      .unwrap()
      .then(() => {
        navigate("/dashboard");
      })
      .catch((err) =>
        toast.error(
          err?.message ||
            "An error occured, please check credentials and try again."
        )
      );
  };

  return (
    <div className={styles.login}>
      <FormProvider {...methods}>
        <form className={styles.login__form} onSubmit={handleSubmit(onSubmit)}>
          <FormElement
            type="text"
            placeholder={"Enter email here..."}
            fieldName="email"
          />
          <FormElement
            type="password"
            placeholder={"Enter password here..."}
            fieldName="password"
            allowTogglePassword
          />
          <div className={styles.remember_me}>
            <label>
              <input type="checkbox" {...methods.register("remember")} />
              Remember Me (30 days)
            </label>
            <Link to="">Forgot password</Link>
          </div>
          <Button type="submit" text="Login" width="full" />
          <p>
            Don't have an account? <Link to="">Sign Up</Link>
          </p>
        </form>
      </FormProvider>
    </div>
  );
};

export default Login;
