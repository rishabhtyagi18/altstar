import React from "react";
import "./MultiStepProgressBar.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const MultiStepProgressBar = ({ step, steps}) => {
  // var stepPercentage = 0;
  // if (step === steps.KYC_VERIFICATION) {
  //   stepPercentage = 16;
  // } else if (step === steps.BANK_ACCOUNT_DETAILS) {
  //   stepPercentage = 49.5;
  // } else if (step === steps.E_SIGN_SCREEN) {
  //   stepPercentage = 82.5;
  // } else if (step === steps.ADVANCE_PAYMENT_SCREEN) {
  //   stepPercentage = 83.5;
  // } else if (step === steps.DOCUMENT_SIGN_SCREEN) {
  //   stepPercentage = 100;
  // } else if (step === steps.FULL_PAYMENT_SCREEN) {
  //   stepPercentage = 100;
  // } else {
  //   stepPercentage = 0;
  // }

  const getStepPercentage = (currentStep) => {
    const totalSteps = Object.keys(steps).length;
    return (100 / (totalSteps - 1)) * (currentStep - 1);
  };

  return (
    <ProgressBar percent={getStepPercentage(step)}>
      <Step>
        {({ accomplished, index }) => (
          <>
            <div className={`indexedStep ${accomplished ? "accomplished" : null}`}></div>
            <div className="steps-name">KYC</div>
          </>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <>
            <div className={`indexedStep ${accomplished ? "accomplished" : null}`}></div>
            <div className="steps-name">Bank Account</div>
          </>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <>
            <div className={`indexedStep ${accomplished ? "accomplished" : null}`}></div>
            <div className="steps-name">EOI</div>
          </>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <>
            <div className={`indexedStep ${accomplished ? "accomplished" : null}`}></div>
            <div className="steps-name">Advance</div>
          </>
        )}
      </Step>
      <br></br>
      <Step>
        {({ accomplished, index }) => (
          <>
            <div className={`indexedStep ${accomplished ? "accomplished" : null}`}></div>
            <div className="steps-name">Document Sign</div>
          </>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <>
            <div className={`indexedStep ${accomplished ? "accomplished" : null}`}></div>
            <div className="steps-name">Full Payment</div>
          </>
        )}
      </Step>
    </ProgressBar>
  );
};

export default MultiStepProgressBar;
