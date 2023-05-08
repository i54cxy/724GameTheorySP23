import { Link, Typography } from "@mui/material";
import {
    IPayoffMatrix2x2,
    PayoffMatrix2X2,
    StyledSlideContainer,
} from "../Slides";

export const PDSlideK = () => {
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
            <PayoffMatrix2X2 data={PMData} />
        </StyledSlideContainer>
    );
};
