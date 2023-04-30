import { Typography } from "@mui/material";
import {
    BGCell,
    DataHighlightType,
    IPayoffMatrix,
    PayoffMatrix,
    PayoffMatrixHighlightData,
    StyledSlideContainer,
    tollTipHighlightProps,
    tollTipWarningProps,
} from "../Slides";

export const PDSlideI = () => {
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
        [0, 2],
        [1, 2],
        [2, 0],
        [2, 1],
        [2, 2],
    ];

    const PMHighlightData: PayoffMatrixHighlightData[] = [
        {
            cell: [1, 0],
            type: [DataHighlightType.Warning, DataHighlightType.None],
        },
        {
            cell: [0, 1],
            type: [DataHighlightType.None, DataHighlightType.Warning],
        },
        {
            cell: [1, 1],
            type: [DataHighlightType.Warning, DataHighlightType.Warning],
        },
    ];

    return (
        <StyledSlideContainer>
            <PayoffMatrix
                data={PMData}
                highlightBackground={PMHighlightBackground}
                highlightData={PMHighlightData}
            />
            <Typography component="span">
                For a{" "}
                <Typography {...tollTipHighlightProps}>rational</Typography>{" "}
                player who seeks to maximize their payoffs, they would always
                choose to betray (the{" "}
                <Typography {...tollTipHighlightProps}>
                    dominant strategy
                </Typography>
                ). By symmetry, player B would always choose to betray as well.
            </Typography>
            <Typography component="span">
                However, both players would be better off if they cooperated by
                staying silent than betraying. As you can see,{" "}
                <Typography {...tollTipWarningProps}>
                    a dominant strategy does not always give the player the
                    optimal result
                </Typography>
                .
            </Typography>
        </StyledSlideContainer>
    );
};
