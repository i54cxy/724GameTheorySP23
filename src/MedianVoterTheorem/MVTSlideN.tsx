import { Link, Typography } from "@mui/material";
import { StyledSlideContainer } from "../Slides/Slides.styles";
import { MVTSpectrum } from "./MVTSpectrum";
import {
    ToolTip,
    toolTipQuickDefinitionProps,
    toolTipQuickDefinitionLinkProps,
} from "../Slides";

export const MVTSlideN = () => {
    return (
        <StyledSlideContainer>
            <MVTSpectrum iteratedElimination={5} />
            <Typography component="span">
                If we keep removing the dominated strategies, we will end up
                with strategies 5 and 6 where there's no more dominated
                strategies any more. Here we effectively reached a Nash
                Equilibrium. This process is called{" "}
                <Link
                    href="https://en.wikipedia.org/wiki/Strategic_dominance#Iterated_elimination_of_strictly_dominated_strategies_(IESDS)"
                    rel="noreferrer"
                    target="_blank"
                >
                    iterated elimination of strictly dominated strategies
                    (IESDS)
                </Link>
                . Note that a convergence like we see in this case is not
                guaranteed.
            </Typography>
            <Typography component="span">
                It's also important to note that this is only possible because I
                know I'm rational, and the opponent is rational, and I know they
                are rational, and they know I'm rational, and I know they know
                I'm rational, and they know I know they're rational, and I know
                they know I know they're rational, and so on and so forth. This
                is called{" "}
                <ToolTip
                    {...toolTipQuickDefinitionProps}
                    href={
                        "https://en.wikipedia.org/wiki/Common_knowledge_(logic)"
                    }
                    description={
                        "An item of information in a game is common knowledge if all of the players know it (it is mutual knowledge) and all of the players know that all other players know it and all other players know that all other players know that all other players know it, and so on."
                    }
                    title={"Common Knowledge"}
                >
                    <Typography {...toolTipQuickDefinitionLinkProps}>
                        common knowledge
                    </Typography>
                </ToolTip>
                .
            </Typography>
        </StyledSlideContainer>
    );
};
