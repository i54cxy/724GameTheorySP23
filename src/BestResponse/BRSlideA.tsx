import { Typography } from "@mui/material";
import { StyledSlideContainer } from "../Slides/Slides.styles";
import { PayoffMatrix2X3 } from "../Slides/PayoffMatrix2X3";
import { IPayoffMatrix2x3 } from "../Slides";

export const BRSlideA = () => {
    const BRData: IPayoffMatrix2x3 = {
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
            <Typography component="span">
                Let's look at a model of the penalty kick game in soccer.
                Consider the payoff matrix below:
            </Typography>
            <PayoffMatrix2X3 data={BRData} />
        </StyledSlideContainer>
    );
};
