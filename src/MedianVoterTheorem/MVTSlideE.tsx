import { Typography } from "@mui/material";
import { StyledSlideContainer } from "../Slides/Slides.styles";
import { MVTSpectrum } from "./MVTSpectrum";

export const MVTSlideE = () => {
    return (
        <StyledSlideContainer>
            <MVTSpectrum positions={[2, 1]} />
            <Typography component="span">
                Consider when our opponent picks strategy 1.
            </Typography>
            <Typography component="span">
                If we pick strategy 1, we split all the voters 50-50, and it's a
                tie.
            </Typography>
            <Typography component="span">
                If we pick strategy 2, we win 90% of the votes and our opponent
                wins 10%.
            </Typography>
            <Typography component="span">
                Here, picking strategy 2 is better than picking strategy 1.
            </Typography>
        </StyledSlideContainer>
    );
};
