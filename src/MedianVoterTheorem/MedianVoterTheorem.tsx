import React, { useState } from "react";
import { IContentProps } from "../Content.types";
import { MainStepper } from "../MainStepper";
import { SlideStepper } from "../SlideStepper/SlideStepper";
import { Slides } from "../Slides";
import { MVTSlideA } from "./MVTSlideA";
import { MVTSlideB } from "./MVTSlideB";
import { MVTSlideC } from "./MVTSlideC";
import { MVTSlideD } from "./MVTSlideD";
import { MVTSlideE } from "./MVTSlideE";
import { MVTSlideF } from "./MVTSlideF";
import { MVTSlideG } from "./MVTSlideG";
import { MVTSlideH } from "./MVTSlideH";
import { MVTSlideI } from "./MVTSlideI";
import { MVTSlideJ } from "./MVTSlideJ";
import { MVTSlideK } from "./MVTSlideK";
import { MVTSlideL } from "./MVTSlideL";
import { MVTSlideM } from "./MVTSlideM";
import { MVTSlideN } from "./MVTSlideN";
import { MVTSlideO } from "./MVTSlideO";
import { MVTSlideP } from "./MVTSlideP";

const steps = [
    {
        label: "Introduction",
    },
    {
        label: "Play It Yourself",
    },
    {
        label: "Find Dominated Strategy",
    },
    {
        label: "Iterated Elimination",
    },
    {
        label: "Common Knowledge",
    },
    {
        label: "Finish",
    },
];

const slides: JSX.Element[] = [
    <MVTSlideA />, // 0: 0
    <MVTSlideB />, // 1: 1
    <MVTSlideC />, // 2: 2
    <MVTSlideD />,
    <MVTSlideE />,
    <MVTSlideF />,
    <MVTSlideG />,
    <MVTSlideH />,
    <MVTSlideI />,
    <MVTSlideJ />,
    <MVTSlideK />,
    <MVTSlideL />,
    <MVTSlideM />, // 3: 12
    <MVTSlideN />, // 4: 13
    <MVTSlideO />,
    <MVTSlideP />, // 5: 15
];
const breakpoints = [0, 1, 2, 12, 13, 15];

export const MedianVoterTheorem: React.FC<IContentProps> = ({ setContent }) => {
    const [activeStep, setActiveStep] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <>
            <MainStepper contentIndex={2} setContent={setContent}>
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
