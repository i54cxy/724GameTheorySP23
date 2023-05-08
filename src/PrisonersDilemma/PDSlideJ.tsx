import { Link, Typography } from "@mui/material";
import {
    CellIndices,
    DataHighlightType,
    IPayoffMatrix2x2,
    PayoffMatrix2X2,
    PayoffMatrixHighlightData,
    StyledSlideContainer,
} from "../Slides";

export const PDSlideJ = () => {
    const PMData: IPayoffMatrix2x2 = {
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

    const PMHighlightBackground: CellIndices[] = [
        [0, 2],
        [1, 2],
        [2, 0],
        [2, 1],
        [2, 2],
    ];

    const PMHighlightData: PayoffMatrixHighlightData[] = [
        {
            cell: [1, 1],
            type: [DataHighlightType.Warning, DataHighlightType.Warning],
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
                Now you might be wondering, what happens if the prisoners are
                allowed to play multiple games? After all, they can get a better
                result by both staying silent, and an even better result if when
                they betray, the other one stays silent. If they are allowed to
                use nondeterministic or reactive strategies and build
                reputations, how well do different strategies perform?
            </Typography>
            <Typography component="span">
                The iterated prisoner's dilemma game is fundamental to some
                theories of human cooperation and trust. To explore more on this
                topic, I recommend the game{" "}
                <Link
                    href="https://ncase.me/trust/"
                    rel="noreferrer"
                    target="_blank"
                >
                    the Evolution of Trust
                </Link>{" "}
                by Nicky Case.
            </Typography>
        </StyledSlideContainer>
    );
};
