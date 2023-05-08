import { Link, Typography } from "@mui/material";
import {
    CellIndices,
    DataHighlightType,
    IPayoffMatrix2x2,
    PayoffMatrix2X2,
    PayoffMatrixHighlightData,
    StyledSlideContainer,
} from "../Slides";

export const PDSlideM = () => {
    const PMData: IPayoffMatrix2x2 = {
        p1: "Player 1",
        p2: "Player 2",
        r0: "Player 1 adopts strategy A",
        r1: "Player 1 adopts strategy B",
        c0: "Player 2 adopts strategy A",
        c1: "Player 2 adopts strategy B",
        d00: [4, 4],
        d01: [1, 3],
        d10: [3, 1],
        d11: [2, 2],
    };

    const PMHighlightBackground: CellIndices[] = [
        [0, 2],
        [1, 2],
        [2, 2],
    ];

    const PMHighlightData: PayoffMatrixHighlightData[] = [
        {
            cell: [0, 0],
            type: [DataHighlightType.Superior, DataHighlightType.None],
        },
        {
            cell: [1, 0],
            type: [DataHighlightType.Inferior, DataHighlightType.None],
        },
        {
            cell: [0, 1],
            type: [DataHighlightType.Inferior, DataHighlightType.None],
        },
        {
            cell: [1, 1],
            type: [DataHighlightType.Superior, DataHighlightType.None],
        },
    ];

    return (
        <StyledSlideContainer>
            <Typography component="span">
                As we're now familiar with the payoff matrix, now consider
                another game, the{" "}
                <Link
                    href="https://en.wikipedia.org/wiki/Coordination_game"
                    rel="noreferrer"
                    target="_blank"
                >
                    Coordiation Game
                </Link>
                , a similar class two-player two-strategy game, as shown in the
                payoff matrix below.
            </Typography>
            <PayoffMatrix2X2
                data={PMData}
                highlightBackground={PMHighlightBackground}
                highlightData={PMHighlightData}
            />
            <Typography component="span">
                Consider player 1: if player 2 chooses strategy A, player 1
                should choose A; if player 2 chooses strategy B, player 1 should
                choose B.
            </Typography>
            <Typography component="span">
                Here, we don't have a dominant or dominated strategy.
            </Typography>
        </StyledSlideContainer>
    );
};
