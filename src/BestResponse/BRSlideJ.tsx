import { Link, Typography } from "@mui/material";
import { StyledSlideContainer } from "../Slides/Slides.styles";

export const BRSlideJ = () => {
    return (
        <StyledSlideContainer>
            <Typography component="span">
                From this particular game of penalty kick, after analyzing the
                expected payoffs, we have a lesson: as the shooter, do not shoot
                to the middle. Of course, in real life, many other factors
                affects this model and the numbers, such as the players'
                handedness and techqniuess. If you are interested in a real life
                study using real soccer game dataset, you can check out{" "}
                <Link
                    href="https://pricetheory.uchicago.edu/levitt/Papers/ChiapporiGrosecloseLevitt2002.pdf"
                    rel="noreferrer"
                    target="_blank"
                >
                    this paper
                </Link>{" "}
                .
            </Typography>
            <Typography component="span">
                There's a more general lesson here. The more general lesson is,
                of course: do not choose a strategy that is never a best
                response to anything you could believe.
            </Typography>
            <Typography component="span">
                This concludes our quick example of a best response analysis!
            </Typography>
        </StyledSlideContainer>
    );
};
