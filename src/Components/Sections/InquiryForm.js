// Custom components & modules
import React from "react";
import InputBox from "../Elements/InputBox";
import MainButton from "../Elements/MainButton";
import TextArea from "../Elements/TextArea";

// Custom styling
import "./Styles/InquiryFormStyles.css";

const InquiryForm = () => {
  return (
    <>
      <div className="form inquiry-form">
        <h2 className="heading">Quick Inquiry!</h2>
        <InputBox inputType="text" inputPlaceholder="Your Name..." />
        <InputBox inputType="text" inputPlaceholder="Your Email..." />
        <InputBox inputType="text" inputPlaceholder="Your Phone Number..." />
        <InputBox inputType="text" inputPlaceholder="Related Subject..." />
        <InputBox inputType="text" inputPlaceholder="Resource Link..." />
        <TextArea inputPlaceholder="Additional Details..." />
        <MainButton buttonText="Submit" />
      </div>
    </>
  );
};

export default InquiryForm;
