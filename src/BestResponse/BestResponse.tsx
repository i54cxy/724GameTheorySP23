import React, { useState } from "react";
import { IContentProps } from "../Content.types";
import { MainStepper } from "../MainStepper";
import { SlideStepper } from "../SlideStepper/SlideStepper";
import { Slides } from "../Slides";

const steps = [
    {
        label: "PlaceHolder1",
    },
    {
        label: "PlaceHolder2",
    },
    {
        label: "PlaceHolder3",
    },
];

const slides: JSX.Element[] = [];
const breakpoints = [0, 1, 2];

export const BestResponse: React.FC<IContentProps> = ({ setContent }) => {
    const [activeStep, setActiveStep] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <>
            <MainStepper contentIndex={3} setContent={setContent}>
                <SlideStepper
                    activeStep={activeStep}
                    breakpoints={breakpoints}
                    steps={steps}
                    setActiveStep={setActiveStep}
                    setCurrentSlide={setCurrentSlide}
                />
            </MainStepper>
            <Slides
                activeStep={activeStep}
                currentSlide={currentSlide}
                setCurrentSlide={setCurrentSlide}
                breakpoints={breakpoints}
                setActiveStep={setActiveStep}
                setContent={setContent}
                slides={slides}
            />
        </>
    );
};
