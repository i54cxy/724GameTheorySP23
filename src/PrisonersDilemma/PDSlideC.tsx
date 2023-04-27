import { List, ListItem, Typography } from "@mui/material";
import { StyledSlideContainer } from "../Slides/Slides.styles";

export const PDSlideC = () => {
    return (
        <StyledSlideContainer>
            <Typography>
                Here’s chart that demonstrates all 4 possible outcomes of this
                game:
            </Typography>
            <Typography>
                This is called the payoff matrix, also known as the normal form,
                of the Prisoner’s Dilemma game. The columns and rows represent
                each players’ strategies; the number in the chart represents the
                payoff that the players get for choosing the corresponding
                strategy. We assume each player is rational, so players aim to
                maximize their payoffs.
            </Typography>
        </StyledSlideContainer>
    );
};
