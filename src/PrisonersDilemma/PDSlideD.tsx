import { Typography } from "@mui/material";
import {
    CellIndices,
    IPayoffMatrix2x2,
    PayoffMatrix2X2,
    StyledSlideContainer,
    ToolTip,
    toolTipNoteProps,
    toolTipQuickDefinitionLinkProps,
} from "../Slides";

export const PDSlideD = () => {
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

    const PMHighlightBackground: CellIndices[] = [[1, 2]];

    return (
        <StyledSlideContainer>
            <Typography component="span">
                Here’s chart that demonstrates all 4 possible outcomes of this
                game:
            </Typography>
            <PayoffMatrix2X2
                data={PMData}
                highlightBackground={PMHighlightBackground}
            />
            <Typography component="span">
                For example, the colored cell indicates that if A stayes silent
                and B betrays, A gets a payoff of -10, meaning that A will be
                spending 10 years in prison, while B gets a payoff of 0, meaning
                that B gets to walk away free.
            </Typography>
            <Typography component="span">
                We assume each player is{" "}
                <ToolTip
                    {...toolTipNoteProps}
                    href={
                        "https://en.wikipedia.org/wiki/Rational_choice_theory"
                    }
                    description={
                        "The assumption of rationality suggests that players will act solely in their own interests to benefit themseves, i.e. maximizing their own payoffs. In reality, it's sometimes inaccurate."
                    }
                    title={"Assumption of rationality"}
                >
                    <Typography {...toolTipQuickDefinitionLinkProps}>
                        {"rational"}
                    </Typography>
                </ToolTip>
                , meaning that players aim to maximize their payoffs, to give us
                a standing ground for analysis.
            </Typography>
        </StyledSlideContainer>
    );
};
