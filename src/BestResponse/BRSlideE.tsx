import { Typography } from "@mui/material";
import { IPayoffMatrix2x3, tollTipHighlightProps } from "../Slides";
import { PayoffMatrix2X3 } from "../Slides/PayoffMatrix2X3";
import { StyledSlideContainer } from "../Slides/Slides.styles";

export const BRSlideE = () => {
    const PMData: IPayoffMatrix2x3 = {
        p1: "Goalie",
        p2: "Shooter",
        r0: "Left",
        r1: "Right",
        c0: "Left",
        c1: "Middle",
        c2: "Right",
        d00: [-4, 4],
        d01: [-6, 6],
        d02: [-9, 9],
        d10: [-9, 9],
        d11: [-6, 6],
        d12: [-4, 4],
    };

    return (
        <StyledSlideContainer>
            <PayoffMatrix2X3 data={PMData} />
            <Typography component="span">
                If we are the coach of the shooter's team, how should we go
                about our strategy? It appears that we're stuck, but
                fortunately, we can do a little bit better than finding
                dominated strategies and deleting dominated strategies.
            </Typography>
            <Typography component="span">
                We can use the help of a chart that describes the{" "}
                <Typography {...tollTipHighlightProps}>
                    expected payoff
                </Typography>{" "}
                of the shooter, depending on the probability ofwhat the goalie
                is going to do.
            </Typography>
        </StyledSlideContainer>
    );
};
