import {
    Box,
    Button,
    Paper,
    Step,
    StepLabel,
    Stepper,
    Typography,
} from "@mui/material";
import { IPrisonersDilemmaStepperProps } from "./PrisonersDilemma.types";

export const PrisonersDilemmaStepper: React.FC<
    IPrisonersDilemmaStepperProps
> = ({ activeStep, steps }) => {
    return (
        <Box sx={{ marginLeft: "30px" }}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step) => (
                    <Step key={step.label}>
                        <StepLabel>{step.label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
};
