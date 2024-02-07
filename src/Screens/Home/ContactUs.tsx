import { useLanguage } from "../../context/LanguageContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

function ContactUs() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    number: "",
    description: "",
  });

  const onSubmit = async (values: any, { resetForm }: any) => {
    try {
      if (!values) {
        throw new Error("Please fill in the form");
      }

      toast.success("Form submitted successfully");
      console.log(values);
      setFormData(values);

      await resetForm();
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    number: Yup.string()
      .matches(/^\d+$/, "Phone number must be numeric")
      .min(10, "Phone number must be at least 10 digits")
      .max(12, "Phone number must not exceed 12 digits")
      .required("Phone number is required"),
    description: Yup.string().required("Description is required"),
  });

  return (
    <div className="contact">
      <div className="container">
        <div className="headings text-center">
          {language === "en" && <h2>Contact Us</h2>}
          {language === "hindi" && <h2>हमारी टीम</h2>}
        </div>
        <Formik
          initialValues={formData}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="formsLayout">
            <div className="shad"></div>
            <div className="formdata">
              <div data-aos="zoom-in" className="inpbox">
                {language === "en" && <label htmlFor="name">Name</label>}
                {language === "hindi" && <label htmlFor="name">नाम</label>}
                <Field type="text" id="name" name="name" />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="error text-danger"
                />
              </div>
              <div data-aos="zoom-in" className="inpbox">
                {language === "en" && <label htmlFor="email">Email</label>}
                {language === "hindi" && <label htmlFor="email">ईमेल</label>}
                <Field type="text" id="email" name="email" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error text-danger"
                />
              </div>
              <div data-aos="zoom-in" className="inpbox">
                {language === "en" && <label htmlFor="number">Number</label>}
                {language === "hindi" && <label htmlFor="number">संख्या</label>}
                <Field type="text" id="number" name="number" />
                <ErrorMessage
                  name="number"
                  component="div"
                  className="error text-danger"
                />
              </div>
              <div data-aos="zoom-in" className="inpbox">
                {language === "en" && (
                  <label htmlFor="description">Description</label>
                )}
                {language === "hindi" && (
                  <label htmlFor="description">विवरण</label>
                )}
                <Field
                  as="textarea"
                  rows={5}
                  id="description"
                  name="description"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="error text-danger"
                />
              </div>
              <div className="inpbox">
                <button type="submit">
                  {language === "en" ? "Submit" : "प्रस्तुत करें"}
                </button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ContactUs;
