import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { SessionState } from "../sharedstate/SessionState";

function validate(values) {
  const errors = {};
  if (!values.name) {errors.name = "Name is required";}

  if (!values.email) { errors.email = "Email is required"; } 
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.username) {errors.username = " A Username is required";}
  if (!values.password) {errors.password = " A Password is required";}
  return errors;
}

export default function RegisterPage() {
  const navigate = useNavigate();
  const {register} = useContext(SessionState);

  const formik = useFormik({
    initialValues: {
    name: "",
    email: "",
    username: "",
    password: "",
    },
    validate : validate,
    onSubmit: (values) => { register(values); navigate("/dashboard");
    },
  });

  return (
    <div className="page-container">
      <div className="login-signup-Card card">
        <div className="card-body login-signup-card-body">
          <h1 className="page-heading">Register</h1>

          <form className="login-signup-form" onSubmit={formik.handleSubmit}>
            <div className="field-block">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                className="form-control"
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="error-message">{formik.errors.name}</div>
              ) : null}
            </div>

            <div className="field-block">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                className="form-control"
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error-message">{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="field-block">
              <label htmlFor="username" className="form-label">
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
              <input className="form-control"
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

            <button 
            className="btn btn-primary login-signup-btn" 
            type="submit">
              Create account
            </button>
          </form>

          <div className="login-signup-link">
            <p>Already have an account</p>
            <button
              type="button"
              className="btn btn-link p-0"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
