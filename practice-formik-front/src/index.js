import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const SimpleForm = () => {
  return (
    <>
      <form className="form-container">
        <div className="form-group">
          <label htmlFor="fullName">full name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">email address:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="your email-address"
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
