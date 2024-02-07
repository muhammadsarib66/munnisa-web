import { useState } from "react";
import { Data } from "../../Data/DummyData";
import { Data2 } from "../../Data/DummyData";
import DatePicker from "react-datepicker";
import { useLanguage } from "../../context/LanguageContext";
import "react-datepicker/dist/react-datepicker.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";

function Hireus() {
  const { language } = useLanguage();
  const [startDate, setStartDate] = useState(new Date());
  const [hireUsData, setHireUsData] = useState({
    name: "",
    email: "",
    title: "",
    serviceType: "",
    date: "",
    budget: "",
    description: "",
  });

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    title: Yup.string().required("Title is required"),
    serviceType: Yup.string().required("Service type is required"),
    budget: Yup.string().required("Budget is required"),
    description: Yup.string().required("Description is required"),
  });

  return (
    <div className="hireus">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            {language === "en" && (
              <div className="hireHeadings">
                <h4>Create a new query</h4>
                <h6>Please fill in the details below.</h6>
              </div>
            )}

            {language == "hindi" && (
              <div className="hireHeadings">
                <h4>नया प्रश्न बनाएं</h4>
                <h6>कृपया नीचे विवरण भरें।</h6>
              </div>
            )}
          </div>
        </div>

        <Formik
          initialValues={hireUsData}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            if (!values) {
              toast.error("Please fill in the form");
              return;
            }

            toast.success("Form submitted successfully");
            setHireUsData(values);
            console.log(hireUsData);

            // Clear form fields after submission
            resetForm();
          }}
        >
          <Form className="formsLayout">
            <div className="shad"></div>
            <div className="formdata">
              <div className="inpbox">
                {language == "en" && <label htmlFor="name">Name</label>}
                {language == "hindi" && <label htmlFor="name">नाम</label>}
                <Field type="text" id="name" name="name" />
                <ErrorMessage name="name" component="div" className="error  " />
              </div>
              <div className="inpbox">
                {language == "en" && <label htmlFor="email">Email</label>}
                {language == "hindi" && <label htmlFor="email">ईमेल</label>}
                <Field type="text" id="email" name="email" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error  "
                />
              </div>
              <div className="inpbox">
                {language == "en" && <label htmlFor="title">Title</label>}
                {language == "hindi" && <label htmlFor="title">शीर्षक</label>}
                <Field type="text" id="title" name="title" />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="error  "
                />
              </div>
              <div className="inpbox">
                {language == "en" && (
                  <label htmlFor="serviceType">Service type</label>
                )}
                {language == "hindi" && (
                  <label htmlFor="serviceType">सेवा का प्रकार</label>
                )}
                <Field as="select" id="serviceType" name="serviceType">
                  <option value="" disabled selected>
                    Select type
                  </option>
                  {language === "en" &&
                    Data.map((item) => (
                      <option key={item.title} value={item.title}>
                        {item.title}
                      </option>
                    ))}
                  {language === "hindi" &&
                    Data2.map((item) => (
                      <option key={item.title} value={item.title}>
                        {item.title}
                      </option>
                    ))}
                </Field>
                <ErrorMessage
                  name="serviceType"
                  component="div"
                  className="error  "
                />
              </div>
              <div className="inpbox2">
                {language == "en" && <label htmlFor="date">Select date</label>}
                {language == "hindi" && (
                  <label htmlFor="date">तारीख़ चयन करें</label>
                )}
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date || new Date())}
                  showTimeSelect
                  dateFormat="Pp"
                  className="calen"
                  wrapperClassName="datepicker-wrapper"
                  id="date"
                  name="date"
                />
                <ErrorMessage name="date" component="div" className="error  " />
              </div>
              <div className="inpbox">
                {language == "en" && <label htmlFor="budget">Budget</label>}
                {language == "hindi" && <label htmlFor="budget">बजट</label>}
                <Field type="text" id="budget" name="budget" />
                <ErrorMessage
                  name="budget"
                  component="div"
                  className="error  "
                />
              </div>
              <div className="inpbox">
                {language == "en" && (
                  <label htmlFor="description">Description</label>
                )}
                {language == "hindi" && (
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
                  className="error  "
                />
              </div>
              {language == "en" && (
                <div className="inpbox">
                  <button type="submit">Submit</button>
                </div>
              )}
              {language == "hindi" && (
                <div className="inpbox">
                  <button type="submit">प्रस्तुत करें</button>
                </div>
              )}
            </div>
          </Form>
        </Formik>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Hireus;
