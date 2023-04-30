import { Box, Step, StepButton, StepLabel, Stepper } from "@mui/material";
import { ISlideStepperProps } from "./SlideStepper.types";

export const SlideStepper: React.FC<ISlideStepperProps> = ({
    activeStep,
    breakpoints,
    steps,
    setActiveStep,
    setCurrentSlide,
}) => {
    const handleStep = (index: number) => () => {
        setActiveStep(index);
        setCurrentSlide(breakpoints[index]);
    };

    return (
        <Box sx={{ marginLeft: "30px" }}>
            <Stepper nonLinear activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                    <Step key={step.label} completed={index < activeStep}>
                        <StepButton color="inherit" onClick={handleStep(index)}>
                            <StepLabel>{step.label}</StepLabel>
                        </StepButton>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
};
