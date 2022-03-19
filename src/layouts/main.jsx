import React, { useState } from "react";
import { useParams } from "react-router-dom";
import SignInForm from "../components/ui/signInForm";
import ValidateForm from "../components/ui/validateForm";

const Main = () => {
  const { type } = useParams();
  const [formType, setFormType] = useState(
    type === "register" ? type : "login"
  );
  const toggleFormType = () => {
    setFormType((prev) => (prev === "register" ? "login" : "register"));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          {formType === "register" ? (
            <>
              <ValidateForm toggleForm={toggleFormType} />

            </>
          ) : (
            <>
              <SignInForm toggleForm={toggleFormType} />

            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Main;
