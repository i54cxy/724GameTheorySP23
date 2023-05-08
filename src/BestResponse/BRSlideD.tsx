import { Typography } from "@mui/material";
import {
    DataHighlightType,
    IPayoffMatrix2x3,
    PayoffMatrixHighlightData,
} from "../Slides";
import { PayoffMatrix2X3 } from "../Slides/PayoffMatrix2X3";
import { StyledSlideContainer } from "../Slides/Slides.styles";

export const BRSlideD = () => {
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

    const PMHighlightData: PayoffMatrixHighlightData[] = [
        {
            cell: [0, 0],
            type: [DataHighlightType.Warning, DataHighlightType.None],
        },
        {
            cell: [0, 1],
            type: [DataHighlightType.Warning, DataHighlightType.None],
        },
        {
            cell: [0, 2],
            type: [DataHighlightType.Warning, DataHighlightType.None],
        },
        {
            cell: [1, 0],
            type: [DataHighlightType.Warning, DataHighlightType.None],
        },
        {
            cell: [1, 1],
            type: [DataHighlightType.Warning, DataHighlightType.None],
        },
        {
            cell: [1, 2],
            type: [DataHighlightType.Warning, DataHighlightType.None],
        },
    ];

    return (
        <StyledSlideContainer>
            <PayoffMatrix2X3 data={PMData} highlightData={PMHighlightData} />
            <Typography component="span">
                We'll start with an idea that we've already learned, which is
                finding if there's a dominated strategy. Does either player here
                have a dominated strategy?
            </Typography>
            <Typography component="span">
                Let's start by looking at the shooter's position. It's kind of
                clear that none of their strategies are dominated. For example,
                "middle" gives a higher payoff than "left" against "left", but
                lower payoff against "right".
            </Typography>
            <Typography component="span">
                Similarly, the goalie doesn't have a dominated strategy either.
            </Typography>
        </StyledSlideContainer>
    );
};
