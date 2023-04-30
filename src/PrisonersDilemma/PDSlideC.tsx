import { Typography } from "@mui/material";
import {
    IPayoffMatrix,
    PayoffMatrix,
    StyledSlideContainer,
    ToolTip,
    tollTipHighlightProps,
    toolTipQuickDefinitionLinkProps,
    toolTipQuickDefinitionProps,
} from "../Slides";

export const PDSlideC = () => {
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

    return (
        <StyledSlideContainer>
            <Typography component="span">
                Here’s chart that demonstrates all 4 possible outcomes of this
                game:
            </Typography>
            <PayoffMatrix data={PMData} />
            <Typography component="span">
                This is called the{" "}
                <Typography {...tollTipHighlightProps}>
                    payoff matrix
                </Typography>
                , also known as the{" "}
                <ToolTip
                    {...toolTipQuickDefinitionProps}
                    href={"https://en.wikipedia.org/wiki/Normal-form_game"}
                    description={
                        "Normal form is a description of a game that is usually a payoff matrix, consisting the player's strategies and corresponding payoffs, or a specification of players' stategy spaces and payoff functions."
                    }
                    title={"normal form"}
                >
                    <Typography {...toolTipQuickDefinitionLinkProps}>
                        normal form
                    </Typography>
                </ToolTip>
                , of the Prisoner’s Dilemma game.
            </Typography>
            <Typography component="span">
                The columns and rows represent each players’ strategies. The
                number in the chart represents the payoff that the players get
                for choosing the corresponding strategy.
            </Typography>
        </StyledSlideContainer>
    );
};
