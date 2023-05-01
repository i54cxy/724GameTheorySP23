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
                Conjecture: strategies 1 is a dominated strategy. Note this
                means that there exists another strategy that always gives a
                better payoff.
            </Typography>
            <Typography component="span">
                Let's test this hypothesis by picking strategy 2, and we'll
                compare the payoffs from these 2 strategies.
            </Typography>
        </StyledSlideContainer>
    );
};
