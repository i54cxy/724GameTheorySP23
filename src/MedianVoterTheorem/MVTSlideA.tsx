import { Typography } from "@mui/material";
import { StyledSlideContainer } from "../Slides/Slides.styles";
import { MVTSpectrum } from "./MVTSpectrum";

export const MVTSlideA = () => {
    return (
        <StyledSlideContainer>
            <Typography component="span">
                Now, we're going to look at a famous application, which is a
                model of politics.
            </Typography>
            <Typography component="span">The game goes like this:</Typography>
            <Typography component="span">
                Imagine two candidates who are going to choose their political
                positions for an election. These positions are on a political
                spectrum, ranging from extreme left to extreme right. We're
                assuming that the spectrum has 10 positions and we'll call them
                1, 2, 3, 4, 5, 6, 7, 8, 9, and 10.
            </Typography>
            <MVTSpectrum />
            <Typography component="span">
                Assume that there are 10% of the voters at each of these
                positions, so they are uniformly distributed. Assume voters will
                vote for the closest candidate, the candidate whose position is
                closest to their own. If there's a tie, the voters split evenly.
                Assume the payoffs of the candidates are that they aim to
                maximizez their share of the vote.
            </Typography>
            <Typography component="span">
                What's going to happen in this game?
            </Typography>
        </StyledSlideContainer>
    );
};
