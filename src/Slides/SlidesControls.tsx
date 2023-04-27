import React from "react";
import { ISlidesControlsProps } from "./Slides.types";
import { Button } from "@mui/material";
import { StyledButtonGroup } from "./Slides.styles";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ReplayIcon from "@mui/icons-material/Replay";

export const SlidesControls: React.FC<ISlidesControlsProps> = ({
    index,
    total,
    handlePrevious,
    handleNext,
    handleRestart,
    handleFinish,
}) => {
    return (
        <StyledButtonGroup>
            {index < total - 1 ? (
                <>
                    {index > 0 && (
                        <Button
                            variant="text"
                            startIcon={<NavigateBeforeIcon />}
                            onClick={handlePrevious}
                        >
                            Previous
                        </Button>
                    )}
                    <Button
                        variant="contained"
                        endIcon={<NavigateNextIcon />}
                        onClick={handleNext}
                    >
                        Next
                    </Button>
                </>
            ) : (
                <>
                    <Button
                        variant="text"
                        startIcon={<ReplayIcon />}
                        onClick={handleRestart}
                    >
                        Restart
                    </Button>
                    {index > 0 && (
                        <Button
                            variant="text"
                            startIcon={<NavigateBeforeIcon />}
                            onClick={handlePrevious}
                        >
                            Previous
                        </Button>
                    )}
                    <Button
                        variant="contained"
                        endIcon={<NavigateNextIcon />}
                        onClick={handleFinish}
                    >
                        Continue
                    </Button>
                </>
            )}
        </StyledButtonGroup>
    );
};
