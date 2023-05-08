import { Typography } from "@mui/material";
import {
    BGCell,
    DataHighlightType,
    IPayoffMatrix,
    PayoffMatrix2X2,
    PayoffMatrixHighlightData,
    StyledSlideContainer,
    ToolTip,
    toolTipQuickDefinitionLinkProps,
    toolTipQuickDefinitionProps,
} from "../Slides";

export const PDSlideH = () => {
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
        [2, 0],
        [2, 1],
        [2, 2],
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
            <PayoffMatrix2X2
                data={PMData}
                highlightBackground={PMHighlightBackground}
                highlightData={PMHighlightData}
            />
            <Typography component="span">
                1. If B stays silent, A get 2 years if A stay silent, and 0
                years if A betray them, so A should betray B.
            </Typography>
            <Typography component="span">
                2. If B betrays me, A get 10 years if A stay silent , and 5
                years if A betray them, so A should still betray B.
            </Typography>
            <Typography component="span">
                No matter what B chooses, A get a better payoff by choosing to
                betray. This means that choosing to betray is a{" "}
                <ToolTip
                    {...toolTipQuickDefinitionProps}
                    href={"https://en.wikipedia.org/wiki/Strategic_dominance"}
                    description={
                        "Given strategy A and B, strategy A strictly dominates B if choosing A always gives a better outcome than choosing B. \n Strategy A is strictly dominant if strategy A strictly dominates every other possible strategy."
                    }
                    title={"Strictly Dominant Strategy"}
                >
                    <Typography {...toolTipQuickDefinitionLinkProps}>
                        strictly dominant strategy
                    </Typography>
                </ToolTip>
                . Similarly, no matter what B chooses, A get a worse payoff by
                choosing to stay silent, so staying silent is a{" "}
                <ToolTip
                    {...toolTipQuickDefinitionProps}
                    href={"https://en.wikipedia.org/wiki/Strategic_dominance"}
                    description={
                        "Given strategy A and B, strategy A is strictly dominated by B if choosing A always gives a worse outcome than choosing B. \n Strategy A is strictly dominated if there exists one other strategy that strictly dominates A."
                    }
                    title={"Strictly Dominated Strategy"}
                >
                    <Typography {...toolTipQuickDefinitionLinkProps}>
                        strictly dominated strategy
                    </Typography>
                </ToolTip>
                .
            </Typography>
        </StyledSlideContainer>
    );
};
