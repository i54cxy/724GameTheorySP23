import { Typography } from "@mui/material";
import { StyledSlideContainer } from "../Slides/Slides.styles";
import { MVTSpectrum } from "./MVTSpectrum";

export const MVTSlideD = () => {
    return (
        <StyledSlideContainer>
            <MVTSpectrum positions={[1, 1]} />
            <Typography component="span">
                Consider when our opponent picks strategy 1.
            </Typography>
            <Typography component="span">
                If we pick strategy 1, we split all the voters 50-50, and it's a
                tie.
            </Typography>
        </StyledSlideContainer>
    );
};
