import { Typography } from "@mui/material";
import { StyledSlideContainer } from "../Slides/Slides.styles";
import { MVTSpectrum } from "./MVTSpectrum";

export const MVTSlideH = () => {
    return (
        <StyledSlideContainer>
            <MVTSpectrum positions={[1, 3]} />
            <Typography component="span">
                Consider when our opponent picks strategy 3.
            </Typography>
            <Typography component="span">
                If we pick strategy 1, we win 15% and our opponent wins 85%.
            </Typography>
        </StyledSlideContainer>
    );
};
