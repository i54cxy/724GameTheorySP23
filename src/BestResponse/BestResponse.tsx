import React, { useState } from "react";
import { IContentProps } from "../Content.types";
import { MainStepper } from "../MainStepper";
import { SlideStepper } from "../SlideStepper/SlideStepper";
import { Slides } from "../Slides";
import { BRSlideA } from "./BRSlideA";
import { BRSlideB } from "./BRSlideB";
import { BRSlideC } from "./BRSlideC";
import { BRSlideD } from "./BRSlideD";
import { BRSlideE } from "./BRSlideE";
import { BRSlideF } from "./BRSlideF";
import { BRSlideG } from "./BRSlideG";
import { BRSlideH } from "./BRSlideH";
import { BRSlideI } from "./BRSlideI";
import { BRSlideJ } from "./BRSlideJ";

const steps = [
    {
        label: "Introduction",
    },
    {
        label: "Finding Domated Strategy",
    },
    {
        label: "Expected Payoff",
    },
    {
        label: "Best Response",
    },
    {
        label: "Finish",
    },
];

const slides: JSX.Element[] = [
    <BRSlideA />, // 0: 0
    <BRSlideB />,
    <BRSlideC />, // 1: 2
    <BRSlideD />,
    <BRSlideE />,
    <BRSlideF />, // 2: 5
    <BRSlideG />,
    <BRSlideH />,
    <BRSlideI />, // 3: 8
    <BRSlideJ />, // 4: 9
];
const breakpoints = [0, 2, 5, 8, 9];

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
                breakpoints={breakpoints}
                currentSlide={currentSlide}
                lastTopic={true}
                setActiveStep={setActiveStep}
                setContent={setContent}
                setCurrentSlide={setCurrentSlide}
                slides={slides}
            />
        </>
    );
};
