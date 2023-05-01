import { Typography } from "@mui/material";
import { StyledSlideContainer } from "../Slides/Slides.styles";
import { MVTSpectrum } from "./MVTSpectrum";

export const MVTSlideJ = () => {
    return (
        <StyledSlideContainer>
            <MVTSpectrum positions={[1, 4]} />
            <Typography component="span">
                Consider when our opponent picks strategy 4.
            </Typography>
            <Typography component="span">
                If we pick strategy 1, we win 20% and our opponent wins 80%.
            </Typography>
        </StyledSlideContainer>
    );
};
