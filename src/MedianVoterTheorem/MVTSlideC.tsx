import { Typography } from "@mui/material";
import { StyledSlideContainer } from "../Slides/Slides.styles";
import { MVTSpectrum } from "./MVTSpectrum";

export const MVTSlideC = () => {
    return (
        <StyledSlideContainer>
            <MVTSpectrum />
            <Typography component="span">
                You may have noticed some patterns on how you opponent may
                respond and how this game works. Now let's analyze it formally.
            </Typography>
            <Typography component="span">
                First of all, are there any strategies that are dominated?
            </Typography>
            <Typography component="span">
                Intuitively, if we pick strategies on the extreme edges, 1 and
                10, there will be less voters available for us because there are
                no voters on the left of 1 or on the right of 10.
            </Typography>
            <Typography component="span">
                We can make a reasonable guess that strategy 1 is a strategy
                dominated by strategy 2. Then we can test if that's true by
                compairing our payoffs when choosing strategy 1 against our
                payoffs when choosing strategy 2. The process looks like the
                following:
            </Typography>
        </StyledSlideContainer>
    );
};
