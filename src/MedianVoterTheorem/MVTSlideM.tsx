import { Typography } from "@mui/material";
import { StyledSlideContainer } from "../Slides/Slides.styles";
import { MVTSpectrum } from "./MVTSpectrum";
import { tollTipWarningProps } from "../Slides";

export const MVTSlideM = () => {
    return (
        <StyledSlideContainer>
            <MVTSpectrum iteratedElimination={2} />
            <Typography component="span">
                By applying the same reasoning, it's easy to see that if we're
                only picking from strategies 2 to 9, then strategy 2 and 9 are
                "dominated strategy". They were not dominated in the original
                game, but once we remove strategy 1 and 10, they become
                dominated strategies in this new game. If we're rational, and we
                know that our opponent is rational, we won't pick strategies 2
                or 9 because they are now dominated. Similarly, if our opponent
                knows these as well, they won't pick strategies 2 or 9 too.
            </Typography>
            <Typography component="span">
                Now we can delete strategies 2 and 9. Note that{" "}
                <Typography {...tollTipWarningProps}>information</Typography> is
                crucial here. that we deleted stategy 2 and 9 because
            </Typography>
            <ul>
                <Typography>
                    1. we won't play dominated strategies 1 and 10 because we
                    are rational, and
                </Typography>
                <Typography>
                    2. our opponent won't play dominated strategies 1 and 10
                    because they are also rational, and
                </Typography>
                <Typography>
                    3. we know our opponent won't play 1 and 10, and we won't
                    play strategies 2 and 9 because they are now dominated
                </Typography>
                <Typography>
                    4. our opponent knows we won't play 1 and 10, and they won't
                    play strategies 2 and 9 because they are now dominated.
                </Typography>
            </ul>
        </StyledSlideContainer>
    );
};
