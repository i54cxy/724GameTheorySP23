import { Typography } from "@mui/material";
import { StyledSlideContainer } from "../Slides/Slides.styles";
import { PayoffMatrix2X3 } from "../Slides/PayoffMatrix2X3";
import { CellIndices, IPayoffMatrix2x3 } from "../Slides";

export const BRSlideB = () => {
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

    const PMHighlightBackground: CellIndices[] = [[1, 1]];

    return (
        <StyledSlideContainer>
            <PayoffMatrix2X3
                data={PMData}
                highlightBackground={PMHighlightBackground}
            />
            <Typography component="span">
                The idea here is that each number represents a probability of
                scoring. For example, if the shooter shoots to the left and the
                goalie dives to the left, there's a 40% chance of the shooter
                making that shot.
            </Typography>
            <Typography component="span">
                To keep things simple, the payoff for the goalie is just the
                negative of that. And for now, we'll ignore the possibility that
                the goalkeeper would stay put.
            </Typography>
            <Typography component="span">
                How do we start to analyze this important game?
            </Typography>
        </StyledSlideContainer>
    );
};
