import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { SessionState } from "../sharedstate/SessionState";

function validate(values) {
  const errors = {};
  if (!values.username) {errors.username = "Username is required";}
  if (!values.password) {errors.password = "Password is required";}
  return errors;
}

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useContext(SessionState);
  const [loginErrorMessage, setLoginErrorMessage] = useState("");

  const formik = useFormik({
    initialValues: {
    username: "",
    password: "",
    },
    validate : validate,
    onSubmit: (values) => {
      setLoginErrorMessage("");
      const loginSuccess = login(values.username, values.password);

      if (loginSuccess) {
        navigate("/dashboard");
        return;
      }
      setLoginErrorMessage("Incorrect username or password, please try again.");
    },
  });

  return (
    <div className="page-container">
      <div className="login-signup-Card card">
        <div className="card-body">
          <h1 className="page-heading">Login</h1>

          {loginErrorMessage ? <div className="error-message">{loginErrorMessage}</div> : null}

          <form className="login-signup-form" 
          onSubmit={formik.handleSubmit}
          >
            <div className="field-block">
              <label htmlFor="username" 
              className="form-label">
                Username
              </label>
              <input
                className="form-control"
                id="username"
                name="username"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
              />
              {formik.touched.username && formik.errors.username ? (
                <div className="error-message">{formik.errors.username}</div>
              ) : null}
            </div>

            <div className="field-block">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                className="form-control"
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="error-message">{formik.errors.password}</div>
              ) : null}
            </div>

            <button className="btn btn-primary login-signup-btn" type="submit">
              Login
            </button>
          </form>

          <div className="login-signup-link">
            <p>Don't have an account yet?</p>
            <button
              type="button"
              className="btn btn-link p-0"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
