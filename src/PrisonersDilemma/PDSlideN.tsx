import { Link, Typography } from "@mui/material";
import {
    BGCell,
    DataHighlightType,
    IPayoffMatrix,
    PayoffMatrix2X2,
    PayoffMatrixHighlightData,
    StyledSlideContainer,
} from "../Slides";

export const PDSlideN = () => {
    const PMData: IPayoffMatrix = {
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

    const PMHighlightBackground: BGCell[] = [
        [1, 1],
        [2, 2],
    ];

    const PMHighlightData: PayoffMatrixHighlightData[] = [
        {
            cell: [0, 0],
            type: [DataHighlightType.Warning, DataHighlightType.Warning],
        },
        {
            cell: [1, 1],
            type: [DataHighlightType.Warning, DataHighlightType.Warning],
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
                Here we have two pure-strategy equilibria, (A, A) with payoff 4
                for each player and (B, B) with payoff 2 for each, where neither
                player has anything to gain by changing only one’s strategy.
                This is called{" "}
                <Link
                    href="https://en.wikipedia.org/wiki/Nash_equilibrium"
                    rel="noreferrer"
                    target="_blank"
                >
                    Nash Equilibrium
                </Link>
                .
            </Typography>
            <Typography component="span">
                As you can revisit, there is also a equilibria in the Prisoner’s
                Dilemma game where both players play the dominant strategy
                (betraying their partner).
            </Typography>
        </StyledSlideContainer>
    );
};
