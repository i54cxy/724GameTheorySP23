import { Typography } from "@mui/material";
import {
    BGCell,
    DataHighlightType,
    IPayoffMatrix,
    PayoffMatrix,
    PayoffMatrixHighlightData,
    StyledSlideContainer,
    ToolTip,
    toolTipQuickDefinitionLinkProps,
    toolTipQuickDefinitionProps,
} from "../Slides";

export const PDSlideO = () => {
    const PMData: IPayoffMatrix = {
        p1: "Player 1",
        p2: "Player 2",
        r0: "Drive on the left",
        r1: "Drive on the right",
        c0: "Drive on the left",
        c1: "Drive on the right",
        d00: [10, 10],
        d01: [0, 0],
        d10: [0, 0],
        d11: [10, 10],
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
                Another coordination game is called the Driving Game. Players A
                and B are driving towards each other. Each player has two
                options: drive on the left or drive on the right. With a payoff
                of 10 meaning no crash and 0 meaning a crash, the payoff matrix
                looks like this:
            </Typography>
            <PayoffMatrix
                data={PMData}
                highlightBackground={PMHighlightBackground}
                highlightData={PMHighlightData}
            />
            <Typography component="span">
                Here we also have two pure Nash equilibria, when both choose to
                drive either on the left or on the right. If we admit{" "}
                <ToolTip
                    {...toolTipQuickDefinitionProps}
                    href={
                        "https://en.wikipedia.org/wiki/Strategy_(game_theory)"
                    }
                    description={
                        "A pure strategy is a deterministic plan for how a player would play the game.\nA mixed strategy is an assignment of a probability to each pure strategy."
                    }
                    title={"Mixed Strategies"}
                >
                    <Typography {...toolTipQuickDefinitionLinkProps}>
                        mixed strategies
                    </Typography>
                </ToolTip>
                , then there’s another Nash equilibria where the probability of
                the pure strategies for the players are (50%, 50%).
            </Typography>
        </StyledSlideContainer>
    );
};
