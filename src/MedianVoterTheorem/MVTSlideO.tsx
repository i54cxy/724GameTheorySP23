import { Link, Typography } from "@mui/material";
import { StyledSlideContainer } from "../Slides/Slides.styles";

export const MVTSlideO = () => {
    return (
        <StyledSlideContainer>
            <Typography component="span">
                Note that common knowledge is much more than{" "}
                <Link
                    href="https://en.wikipedia.org/wiki/Mutual_knowledge_(logic)"
                    rel="noreferrer"
                    target="_blank"
                >
                    mutual knowledge
                </Link>
                .
            </Typography>
            <Typography component="span">
                Consider a simple example of two allied armies situated on
                opposite hilltops waiting to attack their foe. Neither commander
                will attack unless he is sure that the other will attack at
                exactly the same time. The first commander sends a messenger to
                the other hilltop with the message "I plan to attack in the
                morning." The messenger's journey is perilous and he may die on
                the way to delivering the message. If he gets to the other
                hilltop and informs the other commander - can we be certain that
                both will attack in the morning?
            </Typography>
            <Typography component="span">
                Note that both commanders now know the message, but the first
                cannot be sure that the second got the message.
            </Typography>
            <Typography component="span">
                In fact, what we just described is the{" "}
                <Link
                    href="https://en.wikipedia.org/wiki/Two_Generals%27_Problem"
                    rel="noreferrer"
                    target="_blank"
                >
                    Two Generals' Problem
                </Link>
                , which has been proved to be unsolvable. Thus, common knowledge
                implies not only that both know some piece of information, but
                can also be absolutely confident that the rest no it, and that
                the rest know that we know it, and so on.
            </Typography>
        </StyledSlideContainer>
    );
};
