import {
    Box,
    Button,
    Paper,
    Step,
    StepButton,
    StepLabel,
    Stepper,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { IMainStepperProps } from "./MainStepper.types";
import { contentArray } from "../App.types";

const steps = [
    {
        label: "Home",
    },
    {
        label: "The Prisoner's Dilemma",
    },
    {
        label: "The Median Voter Theorem",
    },
    {
        label: "Best Response Analysis: Penalty Kick",
    },
];

export const MainStepper: React.FC<IMainStepperProps> = ({
    contentIndex,
    children,
    setContent,
}) => {
    const [activeStep, setActiveStep] = useState(contentIndex);
    const handleStep = (index: number) => () => {
        setContent(contentArray[index]);
    };

    return (
        <Box sx={{ left: "30px", position: "fixed" }}>
            <Stepper nonLinear activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepButton color="inherit" onClick={handleStep(index)}>
                            <StepLabel>{step.label}</StepLabel>
                        </StepButton>

                        {index === contentIndex && children}
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
};
