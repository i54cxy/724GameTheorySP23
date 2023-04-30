import { Typography } from "@mui/material";
import {
    ToolTip,
    toolTipQuickDefinitionLinkProps,
    toolTipQuickDefinitionProps,
} from "../Slides";
import { StyledSlideContainer } from "../Slides/Slides.styles";

export const PDSlideA = () => {
    return (
        <StyledSlideContainer>
            <Typography component="span">
                In the following games and visualizations, we’re going to
                demonstrate some basic Game Theory concepts as well as some
                analogical real-life examples, starting with the{" "}
                <ToolTip
                    {...toolTipQuickDefinitionProps}
                    href={"https://en.wikipedia.org/wiki/Prisoner%27s_dilemma"}
                    description={
                        "Perhaps the most wellknown game in Game Theory, the Prisoner's Dilemma is a classic non-zero-sum game, where one's gain does not necessarily means the other ones' loss."
                    }
                    title={"Prisoner's Dilemma"}
                >
                    <Typography {...toolTipQuickDefinitionLinkProps}>
                        Prisoner's Dilemma
                    </Typography>
                </ToolTip>
                .
            </Typography>

            <img
                alt={"Prisoner's Dilemma"}
                src={
                    "https://live.staticflickr.com/8060/8245423564_0efd54b09c_b.jpg"
                }
                width={"100%"}
            />
        </StyledSlideContainer>
    );
};
