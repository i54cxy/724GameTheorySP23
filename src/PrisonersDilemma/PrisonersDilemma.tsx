import { Box } from "@mui/material";
import React from "react";
import { IContentProps } from "../Content.types";
import { PrisonersDilemmaStepper } from "./PrisonersDilemmaStepper";
import { MainStepper } from "../MainStepper";

export const PrisonerDilemma: React.FC<IContentProps> = ({ setContent }) => {
    return (
        <Box>
            <MainStepper contentIndex={1} setContent={setContent}>
                <PrisonersDilemmaStepper />
            </MainStepper>
        </Box>
    );
};
