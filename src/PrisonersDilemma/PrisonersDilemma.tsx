import React, { useState } from "react";
import { IContentProps } from "../Content.types";
import { MainStepper } from "../MainStepper";
import { PDSlides } from "./PDSlides";
import { PrisonersDilemmaStepper } from "./PrisonersDilemmaStepper";

const steps = [
    {
        label: "Introduction",
    },
    {
        label: "Payoff Matrix",
    },
    {
        label: "Dominant & Dominated Strategy",
    },
];

export const PrisonerDilemma: React.FC<IContentProps> = ({ setContent }) => {
    const [activeStep, setActiveStep] = useState(0);
    return (
        <>
            <MainStepper contentIndex={1} setContent={setContent}>
                <PrisonersDilemmaStepper
                    activeStep={activeStep}
                    steps={steps}
                />
            </MainStepper>
            <PDSlides setActiveStep={setActiveStep} setContent={setContent} />
        </>
    );
};
