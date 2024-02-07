import { Link } from "react-router-dom";
import Images from "../../images/Images";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (values: any, { resetForm }: any): void => {
    if (!values) {
      toast.error("Please fill in the form");
      return;
    }

    // Your form submission logic here

    toast.success("Login successfully", { position: "bottom-right" });
    console.log(values);
    setLoginData(values);
    // Clear form fields after submission
    resetForm();
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  return (
    <div className="login">
      <div className="container">
        <div className="row rows">
          <div className="col-sm-6">
            <div className="logininpt">
              <img src={Images.Logo} alt="Logo" />
              <Formik
                initialValues={loginData}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                <Form>
                  <div className="inpbox3">
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error text-danger"
                  />
                  <div className="inpbox3">
                    <Field
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      placeholder="Password"
                    />
                    {showPassword ? (
                      <FaRegEye onClick={togglePasswordVisibility} />
                    ) : (
                      <FaRegEyeSlash onClick={togglePasswordVisibility} />
                    )}
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error text-danger"
                  />
                  <p className="forget">
                    <Link to="/">forget password?</Link>
                  </p>
                  <div className="singBtn">
                    <button type="submit">SignIn</button>
                  </div>
                  <p>
                    don't have an account? <Link to="/Signup">SignUp</Link>
                  </p>
                </Form>
              </Formik>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="loginImg">
              <img src={Images.Login} alt="LOgin" />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SignIn;
