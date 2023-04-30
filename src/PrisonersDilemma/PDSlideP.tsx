import { Typography } from "@mui/material";
import {
    BGCell,
    DataHighlightType,
    IPayoffMatrix,
    PayoffMatrix,
    PayoffMatrixHighlightData,
    StyledSlideContainer,
} from "../Slides";

export const PDSlideP = () => {
    const PMData: IPayoffMatrix = {
        p1: "Husband",
        p2: "Wife",
        r0: "Football",
        r1: "Musical",
        c0: "Football",
        c1: "Musical",
        d00: [2, 1],
        d01: [0, 0],
        d10: [0, 0],
        d11: [1, 2],
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
                Another similar game is Battle of the Sexes, where two players,
                wife and husband, are deciding between attending two
                simultaneously occurring events: a football game and a musical.
                If they disagree with each other, nobody gets anything. The
                payoff matrix is shown below:
            </Typography>
            <PayoffMatrix
                data={PMData}
                highlightBackground={PMHighlightBackground}
                highlightData={PMHighlightData}
            />
            <Typography component="span">
                Note all the games so far are simultaneous-move games. If we
                design a sequential-move version of the game, the first mover
                clearly has an advantage as they can decide to move to their
                preferred equilibrium. Next time when you think about whether to
                make the first move, maybe think again!
            </Typography>
        </StyledSlideContainer>
    );
};
