import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { SessionState } from "../sharedstate/SessionState";
import { EventState } from "../sharedstate/EventState";
import NavBar from "../routes/NavBar";

function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = "Event Name is required";
  }
  if (!values.date) {
    errors.date = " A date is required";
  }
  if (!values.time) {
    errors.time = "Time is required";
  }
  if (!values.location) {
    errors.location = "Location is required";
  }
  if (!values.description) {
    errors.description = "A description is required";
  }

  return errors;
}

export default function EventPage() {

  const navigate = useNavigate();
  const { loggedIn } = useContext(SessionState);
  const { addEvent } = useContext(EventState);

  useEffect(() => {if (!loggedIn) {navigate("/login");}
  }, [loggedIn, navigate]);

  const formik = useFormik({
    initialValues: {
    name: "",
    date: "",
    time: "",
    location: "",
    description: "",
    },
    validate : validate,
    onSubmit: (values) => {
      addEvent(values);
      navigate("/dashboard");
    },
  });

  return (
       <div>
          <NavBar />
         <div className="page-container">
          <div className="login-signup-Card card">
            <div className="card-body login-signup-card-body">
            <h1 className="page-heading">Add Event</h1>
            <form className="login-signup-form" onSubmit={formik.handleSubmit}>
              <div className="field-block">
                <label htmlFor="name" className="form-label">Event title</label>
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
                  <div className="error-message">{formik.errors.name}</div>) : null} 
              </div>
              <div className="field-block">
                <label htmlFor="date" className="form-label">
                  Date
                </label>
                <input
                  className="form-control"
                  id="date"
                  name="date"
                  type="date"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.date}
                />
                {formik.touched.date && formik.errors.date ? (
                  <div className="error-message">{formik.errors.date}</div>) : null}
              </div>
              <div className="field-block">
                <label htmlFor="time" className="form-label">
                  Time
                </label>
                <input
                  className="form-control"
                  id="time"
                  name="time"
                  type="time"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.time}
                />
                {formik.touched.time && formik.errors.time ? (
                  <div className="error-message">{formik.errors.time}</div>) : null}
              </div>

              <div className="field-block">
                <label htmlFor="location" className="form-label">
                  Location
                </label>
                <input
                  className="form-control"
                  id="location"
                  name="location"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.location}
                />
                {formik.touched.location && formik.errors.location ? (
                  <div className="error-message">{formik.errors.location}</div>) : null}
              </div>

              <div className="field-block">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.description}
                />
                {formik.touched.description && formik.errors.description ? (
                  <div className="error-message">{formik.errors.description}</div>) : null}
              </div>

              <button className="btn btn-primary login-signup-btn" type="submit">
                Save event
              </button>

              <button
                type="button"
                className="btn btn-secondary login-signup-btn"
                onClick={() => navigate("/dashboard")}
              >
                Cancel
              </button>
            </form>
          </div>
         </div>
        </div>
      </div>
  );
}