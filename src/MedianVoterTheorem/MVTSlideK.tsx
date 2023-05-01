import { Typography } from "@mui/material";
import { StyledSlideContainer } from "../Slides/Slides.styles";
import { MVTSpectrum } from "./MVTSpectrum";

export const MVTSlideK = () => {
    return (
        <StyledSlideContainer>
            <MVTSpectrum positions={[2, 4]} />
            <Typography component="span">
                Consider when our opponent picks strategy 4.
            </Typography>
            <Typography component="span">
                If we pick strategy 1, we win 20% and our opponent wins 80%.
            </Typography>
            <Typography component="span">
                If we pick strategy 2, we win 25% and our opponent wins 75%.
            </Typography>
            <Typography component="span">
                Here, picking strategy 2 is better than picking strategy 1.
            </Typography>
            <Typography component="span">
                Hopefully, you can see a pattern here: if our opponent picks any
                position bigger than 2, picking strategy 2 is always going to
                give 5% more votes than picking strategy 1. Together with the
                first 2 corner cases, it's not difficult to see that strategy 1
                is indeed dominated by strategy 2.
            </Typography>
        </StyledSlideContainer>
    );
};
