import React from "react";
import ReactDOM from "react-dom/client";
import { useFormik } from "formik";
import "./index.css";

const SimpleForm = () => {
  /* fomikの定義 */
  const { values, handleChange } = useFormik({
    /* 初期値の定義 */
    initialValues: {
      fullName: "",
      email: "",
    },
  });

  /* submit時の挙動の定義（仮） */
  const printFormik = (e) => {
    e.preventDefault();
    console.log(`fullName : ${values.fullName}`);
    console.log(`email : ${values.email}`);
  };

  return (
    <>
      {/* onSubmitの追加 */}
      <form className="form-container" onSubmit={printFormik}>
        <div className="form-group">
          <label htmlFor="fullName">full name:</label>
          {/* onChangeとvalueの追加 */}
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="your name"
            onChange={handleChange}
            value={values.fullName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">email address:</label>
          {/* onChangeとvalueの追加 */}
          <input
            type="email"
            id="email"
            name="email"
            placeholder="your email-address"
            onChange={handleChange}
            value={values.email}
          />
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
