import { Box } from "@mui/material";
import React from "react";
import { IContentProps } from "../Content.types";
import { MainStepper } from "../MainStepper";
import { BestResponseStepper } from "./BestResponseStepper";

export const BestResponse: React.FC<IContentProps> = ({ setContent }) => {
    return (
        <Box>
            <MainStepper contentIndex={3} setContent={setContent}>
                <BestResponseStepper />
            </MainStepper>
        </Box>
    );
};
