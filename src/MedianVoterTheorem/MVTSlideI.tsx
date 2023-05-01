import { Typography } from "@mui/material";
import { StyledSlideContainer } from "../Slides/Slides.styles";
import { MVTSpectrum } from "./MVTSpectrum";

export const MVTSlideI = () => {
    return (
        <StyledSlideContainer>
            <MVTSpectrum positions={[2, 3]} />
            <Typography component="span">
                Consider when our opponent picks strategy 3.
            </Typography>
            <Typography component="span">
                If we pick strategy 1, we win 15% and our opponent wins 85%.
            </Typography>
            <Typography component="span">
                If we pick strategy 2, we win 20% and our opponent wins 80%.
            </Typography>
            <Typography component="span">
                Here, picking strategy 2 is better than picking strategy 1.
            </Typography>
            <Typography component="span">
                Note we're trying to show that strategy 1 is dominated by
                strategy 2, not that strategy 2 is a winning strategy.
            </Typography>
        </StyledSlideContainer>
    );
};
