import { Button, Typography } from "@mui/material";
import { useState } from "react";
import { StyledSlideContainer } from "../Slides/Slides.styles";
import { MVTSpectrum } from "./MVTSpectrum";

export const MVTSlideB = () => {
    const [selection, setSelection] = useState<number>(0);

    let otherSelection = 0,
        percentage = 0;
    if (selection !== 0) {
        otherSelection = selection > 5 ? selection - 1 : selection + 1;
        percentage = (selection + otherSelection - 1) * 5;
        percentage = selection > 5 ? 100 - percentage : percentage;
    }

    return (
        <StyledSlideContainer>
            <Typography component="span">
                Let's try and see how you may fare as politician A in this game.
                Click on one of the positions below to make your selection:
            </Typography>
            <MVTSpectrum
                interactive={selection === 0}
                positions={
                    selection !== 0 ? [selection, otherSelection] : undefined
                }
                setSelection={setSelection}
            />
            {selection !== 0 && (
                <>
                    <Typography component="span">
                        You picked the position {selection} and your opponent
                        picked the position {otherSelection}. You take{" "}
                        {percentage}% of the votes and your opponent takes{" "}
                        {100 - percentage}%.
                        {percentage < 50
                            ? " You did not get the majority of votes."
                            : " You and your opponent are even."}
                    </Typography>
                    <Button
                        onClick={() => {
                            setSelection(0);
                        }}
                        sx={{ alignSelf: "center", width: "min-content" }}
                    >
                        Replay
                    </Button>
                </>
            )}
        </StyledSlideContainer>
    );
};
