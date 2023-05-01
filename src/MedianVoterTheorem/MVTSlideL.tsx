import { Typography } from "@mui/material";
import { StyledSlideContainer } from "../Slides/Slides.styles";
import { MVTSpectrum } from "./MVTSpectrum";
import { tollTipWarningProps } from "../Slides";

export const MVTSlideL = () => {
    return (
        <StyledSlideContainer>
            <MVTSpectrum iteratedElimination={1} />
            <Typography component="span">
                Now that we know strategy 1 is a dominated strategy, by
                symmetry, strategy 10 is also a dominated strategy. A rational
                player would never play a dominated strategy, since they know
                another strategy will{" "}
                <Typography {...tollTipWarningProps}>always</Typography> give a
                better result. Therefore, we can "delete" these strategies from
                our strategy space when forming our strategy.
            </Typography>
            <Typography component="span">
                If we think in our opponent shoes, and if our opponent knows
                this as well, we know that they won't pick strategy 1 or 10
                either. Now the game gets tricky: it's effectively equivalent to
                the same game where strategy 1 and 10 are removed.
            </Typography>
            <Typography component="span">
                Note again that we deleted stategy 1 and 10 because
            </Typography>
            <ul>
                <Typography>
                    1. we won't play dominated strategies because we are
                    rational, and
                </Typography>
                <Typography>
                    2. our opponent won't play dominated strategies because they
                    are also rational
                </Typography>
            </ul>
        </StyledSlideContainer>
    );
};
