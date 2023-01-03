import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactLoading from "react-loading";
import "./submitButton.scss";
import { faCheck } from "@fortawesome/fontawesome-free-solid";

function SubmitButton({ formValid, isActive, handleSubmit, loading }) {
  return (
    <div className="button-wrapper ">
      {loading ? (
        <div className="loading">
          <ReactLoading
            type="spinningBubbles"
            color="green"
            height={20}
            width={20}
          />
        </div>
      ) : (
        <button
          className={
            formValid ? `submit ${isActive ? "active" : " "}` : "disable"
          }
          type="button"
          onClick={(e) => handleSubmit(e)}
          disabled={!formValid}
        >
          <span>Submit</span>
          <div className="success">
            <FontAwesomeIcon
              icon={faCheck}
              className="icon"
            />
          </div>
        </button>
      )}
    </div>
  );
}

export default SubmitButton;
