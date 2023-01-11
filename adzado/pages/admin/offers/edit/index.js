import React, { useState } from "react";

// steps
import Offer from "./component/step-1";
import Payout from "./component/step-2";
import Schedule from "./component/step-3";
import Method from "./component/step-4";
import Accept from "./component/step-5";
import Requirement from "./component/step-6";
import Additional from "./component/step-7";
import Description from "./component/step-8";
import Editoffer from "./editoffer";

const FormComponent = ({ setIsEdit }) => {
  const [step, setselectStep] = useState(1);

  const nextStep = (step) => {
    setselectStep((step += 1));
  };

  const prevStep = (step) => {
    setselectStep((step -= 1));
  };

  const selectedStep = (step) => {
    switch (step) {
      case 1:
        return <Offer setIsEdit={setIsEdit} nextStep={nextStep} step={step} />;
      case 2:
        return (
          <Payout
            setIsEdit={setIsEdit}
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
          />
        );
      case 3:
        return (
          <Schedule
            setIsEdit={setIsEdit}
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
          />
        );
      case 4:
        return (
          <Method
            setIsEdit={setIsEdit}
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
          />
        );
      case 5:
        return (
          <Accept
            setIsEdit={setIsEdit}
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
          />
        );
      case 6:
        return (
          <Requirement
            setIsEdit={setIsEdit}
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
          />
        );
      case 7:
        return (
          <Additional
            setIsEdit={setIsEdit}
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
          />
        );
      case 8:
        return (
          <Description
            setIsEdit={setIsEdit}
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
          />
        );

      // case 8:
      //   return (
      //     <Editoffer setIsEdit={setIsEdit} prevStep={prevStep} step={step} />
      //   );
    }
  };

  return (
    <div>
      <div>{selectedStep(step)}</div>
    </div>
  );
};
export default FormComponent;
