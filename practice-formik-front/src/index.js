import React from "react";
import ReactDOM from "react-dom/client";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./index.css";

/* 初期値の定義 */
const initialValues = {
  fullName: "",
  email: "",
};

/* バリデーションの定義 */
const validationSchema = Yup.object().shape({
  fullName: Yup.string().required().max(15),
  email: Yup.string().required().email(),
});

/* submit処理の定義 */
const customSubmit = (values) => {
  console.log(`fullName : ${values.fullName}`);
  console.log(`email : ${values.email}`);
};

const SimpleForm = () => {
  /* fomikの定義 */
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      /* 初期値 */
      initialValues: initialValues,
      /* バリデーション */
      validationSchema: validationSchema,
      /* submit処理 */
      onSubmit: customSubmit,
    });

  return (
    <>
      {/* onSubmitの修正 */}
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">full name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="your name"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.fullName}
          />
          {touched.fullName && errors.fullName && <p>{errors.fullName}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">email address:</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="your email-address"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.email}
          />
          {touched.email && errors.email && <p>{errors.email}</p>}
        </div>
        <button type="submit" className="submit-button">
          submit
        </button>
      </form>
    </>
  );
};

const App = () => {
  return <SimpleForm />;
};

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);
