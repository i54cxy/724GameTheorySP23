import React, { useState } from "react";
import { IContentProps } from "../Content.types";
import { MainStepper } from "../MainStepper";
import { SlideStepper } from "../SlideStepper/SlideStepper";
import { PDSlideA } from "./PDSlideA";
import { PDSlideB } from "./PDSlideB";
import { PDSlideC } from "./PDSlideC";
import { PDSlideD } from "./PDSlideD";
import { PDSlideE } from "./PDSlideE";
import { PDSlideF } from "./PDSlideF";
import { PDSlideG } from "./PDSlideG";
import { PDSlideH } from "./PDSlideH";
import { PDSlideI } from "./PDSlideI";
import { PDSlideJ } from "./PDSlideJ";
import { PDSlideK } from "./PDSlideK";
import { PDSlideL } from "./PDSlideL";
import { PDSlideM } from "./PDSlideM";
import { PDSlideN } from "./PDSlideN";
import { PDSlideO } from "./PDSlideO";
import { PDSlideP } from "./PDSlideP";
import { PDSlideZ } from "./PDSlideZ";
import { PDSlides } from "./PDSlides";

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
    {
        label: "Iterated Prisoner's Dilemma",
    },
    {
        label: "Coordination Game",
    },
    {
        label: "Nash Equilibrium",
    },
    {
        label: "More Examples",
    },
    {
        label: "Finish",
    },
];

const slides = [
    <PDSlideA />, // 0: 0
    <PDSlideB />,
    <PDSlideC />, // 1: 2
    <PDSlideD />,
    <PDSlideE />,
    <PDSlideF />,
    <PDSlideG />, // 2: 6
    <PDSlideH />,
    <PDSlideI />,
    <PDSlideJ />, // 3: 9
    <PDSlideK />, // 4: 10
    <PDSlideL />,
    <PDSlideM />,
    <PDSlideN />, // 5: 13
    <PDSlideO />, // 6: 14
    <PDSlideP />, //
    <PDSlideZ />, // 7: 16
];
const breakpoints = [0, 2, 6, 9, 10, 13, 14, 16];

export const PrisonerDilemma: React.FC<IContentProps> = ({ setContent }) => {
    const [activeStep, setActiveStep] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    return (
        <>
            <MainStepper contentIndex={1} setContent={setContent}>
                <SlideStepper
                    activeStep={activeStep}
                    breakpoints={breakpoints}
                    steps={steps}
                    setActiveStep={setActiveStep}
                    setCurrentSlide={setCurrentSlide}
                />
            </MainStepper>
            <PDSlides
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
