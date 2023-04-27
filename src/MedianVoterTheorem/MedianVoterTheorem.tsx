import { Box } from "@mui/material";
import React from "react";
import { IContentProps } from "../Content.types";
import { MainStepper } from "../MainStepper";
import { MedianVoterTheoremStepper } from "./MedianVoterTheoremStepper";

export const MedianVoterTheorem: React.FC<IContentProps> = ({ setContent }) => {
    return (
        <Box>
            <MainStepper contentIndex={2} setContent={setContent}>
                <MedianVoterTheoremStepper />
            </MainStepper>
        </Box>
    );
};
