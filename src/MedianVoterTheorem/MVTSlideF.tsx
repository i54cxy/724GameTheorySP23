import { Typography } from "@mui/material";
import { StyledSlideContainer } from "../Slides/Slides.styles";
import { MVTSpectrum } from "./MVTSpectrum";

export const MVTSlideF = () => {
    return (
        <StyledSlideContainer>
            <MVTSpectrum positions={[1, 2]} />
            <Typography component="span">
                Consider when our opponent picks strategy 2.
            </Typography>
            <Typography component="span">
                If we pick strategy 1, we win 10% and our opponent wins 90%.
            </Typography>
        </StyledSlideContainer>
    );
};
