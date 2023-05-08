import { Typography } from "@mui/material";
import {
    BGCell,
    DataHighlightType,
    IPayoffMatrix,
    PayoffMatrix2X2,
    PayoffMatrixHighlightData,
    StyledSlideContainer,
} from "../Slides";

export const PDSlideE = () => {
    const PMData: IPayoffMatrix = {
        p1: "A",
        p2: "B",
        r0: "A stays silent",
        r1: "A betrays",
        c0: "B stays silent",
        c1: "B betrays",
        d00: [-1, -1],
        d01: [-10, 0],
        d10: [0, -10],
        d11: [-5, -5],
    };

    const PMHighlightBackground: BGCell[] = [
        [0, 1],
        [1, 1],
        [2, 1],
    ];

    const PMHighlightData: PayoffMatrixHighlightData[] = [
        {
            cell: [0, 0],
            type: [DataHighlightType.Inferior, DataHighlightType.None],
        },
        {
            cell: [1, 0],
            type: [DataHighlightType.Superior, DataHighlightType.None],
        },
    ];

    return (
        <StyledSlideContainer>
            <PayoffMatrix2X2
                data={PMData}
                highlightBackground={PMHighlightBackground}
                highlightData={PMHighlightData}
            />
            <Typography component="span">
                To analyze the strategies, let’s put us in criminal A’s shoes.
            </Typography>
            <Typography component="span">
                We have two options: staying silent or betraying B:
            </Typography>
            <Typography component="span">
                1. If B stays silent, A get 1 year if A stay silent, and 0 years
                if A betray them, so A should betray B.
            </Typography>
        </StyledSlideContainer>
    );
};
