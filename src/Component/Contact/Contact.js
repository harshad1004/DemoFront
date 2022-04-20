import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Filed is Required";
  }

  if (!values.email) {
    errors.email = "Filed is Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.subject) {
    errors.subject = "Filed is Required";
  }
  if (!values.message) {
    errors.message = "Filed is Required";
  }

  return errors;
};

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      axios
        .post("http://localhost:5000/api/contactUs", values)
        .then((data) => {
          if (data.status) {
            toast.success(data.data.message);
            console.log(data, "success");
            resetForm();
          }
        })
        .catch((err) => {
          toast.error(err.response.data.Error);
        });
    },
  });
  return (
    <>
      <section className="inner_page_head">
        <div className="container_fuild">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <h3>Contact us</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="full">
                <form onSubmit={formik.handleSubmit}>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter Your Full Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                  {formik.errors.name ? (
                    <div style={{ color: "red" }}>{formik.errors.name}</div>
                  ) : null}
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter Your Email  Address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.errors.email ? (
                    <div style={{ color: "red" }}>{formik.errors.email}</div>
                  ) : null}
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Enter Your Subject"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.subject}
                  />
                  {formik.errors.subject ? (
                    <div style={{ color: "red" }}>{formik.errors.subject}</div>
                  ) : null}
                  <input
                    id="message"
                    name="message"
                    type="text"
                    placeholder="Enter Your message"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                  />
                  {formik.errors.message ? (
                    <div style={{ color: "red" }}>{formik.errors.message}</div>
                  ) : null}
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Contact;
