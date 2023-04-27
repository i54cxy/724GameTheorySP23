import { Typography } from "@mui/material";
import { StyledSlideContainer } from "../Slides/Slides.styles";
import { ToolTip } from "../Slides/ToolTip";

export const PDSlideA = () => {
    return (
        <StyledSlideContainer>
            <Typography component="span">
                In the following games and visualizations, we’re going to
                demonstrate some basic Game Theory concepts as well as some
                analogical real-life examples, starting with the{" "}
                <ToolTip
                    href={"https://en.wikipedia.org/wiki/Prisoner%27s_dilemma"}
                    description={
                        "Perhaps the most wellknown game in Game Theory, the Prisoner's Dilemma is a classic non-zero-sum game, where one's gain does not necessarily means the other ones' loss."
                    }
                    buttonLabel="Wikipedia Page"
                    title={"Prisoner's Dilemma"}
                    umbrella={"QuickDefinition"}
                >
                    <Typography
                        color="info.main"
                        component="a"
                        sx={{ cursor: "pointer", position: "relative" }}
                    >
                        {"Prisoner's Dilemma"}
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
