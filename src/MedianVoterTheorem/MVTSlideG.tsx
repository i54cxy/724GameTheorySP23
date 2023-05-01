import { Typography } from "@mui/material";
import { StyledSlideContainer } from "../Slides/Slides.styles";
import { MVTSpectrum } from "./MVTSpectrum";

export const MVTSlideG = () => {
    return (
        <StyledSlideContainer>
            <MVTSpectrum positions={[2, 2]} />
            <Typography component="span">
                Consider when our opponent picks strategy 2.
            </Typography>
            <Typography component="span">
                If we pick strategy 1, we win 10% and our opponent wins 90%.
            </Typography>
            <Typography component="span">
                If we pick strategy 2, it's a tie and we each win 50%.
            </Typography>
            <Typography component="span">
                Here, picking strategy 2 is better than picking strategy 1.
            </Typography>
        </StyledSlideContainer>
    );
};
