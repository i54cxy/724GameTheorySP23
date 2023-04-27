import { List, ListItem, Typography } from "@mui/material";
import { StyledSlideContainer } from "../Slides/Slides.styles";

export const PDSlideB = () => {
    return (
        <StyledSlideContainer>
            <Typography>
                Two members of a criminal gang, A and B, are arrested and
                imprisoned. They have no way to communicate with each other.
            </Typography>
            <Typography>
                The police do not have enough evidence for a conviction. They
                plan to sentence both to 1 year in prison on a lesser charge.
            </Typography>
            <Typography>
                {" "}
                However, they offer each prisoner a Faustian bargain: if one of
                them confesses to the crime of the principal charge, betraying
                the other, they will be pardoned and free to leave while the
                other will be sentenced to 10 years. If they both betray the
                other, they share the sentence, and each will serve 5 years.
            </Typography>
            <Typography>What are the possible outcomes?</Typography>
            <List>
                <ListItem>
                    If A and B both remain silent, they will each serve the
                    lesser charge of 2 years in prison.
                </ListItem>
                <ListItem>
                    If A betrays B but B remains silent, then A will be set free
                    while B serves 10 years in prison.
                </ListItem>
                <ListItem>
                    If B betrays A, A will serve 10 years in prison and B will
                    be set free.
                </ListItem>
                <ListItem>
                    If they both betray the other, they each serve 5 years.
                </ListItem>
            </List>
        </StyledSlideContainer>
    );
};
