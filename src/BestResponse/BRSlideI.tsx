import { Typography } from "@mui/material";
import { StyledSlideContainer } from "../Slides/Slides.styles";
import { BRChart } from "./BRChart";
import { options } from "./BRChart.types";
import {
    ToolTip,
    toolTipQuickDefinitionProps,
    toolTipQuickDefinitionLinkProps,
} from "../Slides";

const data = {
    labels: ["0", "0.5", "1"],
    datasets: [
        {
            label: "Left",
            data: [4, 6.5, 9],
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 162, 235, 0.5)",
            yAxisID: "y1",
        },
        {
            label: "Middle",
            data: [6, 6, 6],
            borderColor: "rgb(97, 122, 85)",
            backgroundColor: "rgba(97, 122, 85, 0.5)",
            yAxisID: "y1",
        },
        {
            label: "Right",
            data: [9, 6.5, 4],
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            yAxisID: "y1",
        },
        {
            label: "Best Response when prob(right) < 0.5",
            data: [9, 6.5],
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            yAxisID: "y1",
            fill: true,
        },
        {
            label: "Best Response when prob(right) > 0.5",
            data: [null, 6.5, 9],
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 162, 235, 0.5)",
            yAxisID: "y1",
            fill: true,
        },
    ],
};

export const BRSlideI = () => {
    return (
        <StyledSlideContainer>
            <BRChart options={options} data={data} />
            <Typography component="span">
                Finally, if we shoot to the right and the goalie dives to the
                left, our payoff is 9. If we shoot to the right and the goalie
                dives to the right, our payoff is 4.
            </Typography>
            <Typography component="span">
                Immediately, one thing that jumps out of the picture is that if
                the probability of the goalie diving to the right is below 0.5,
                then the best the shooter can do is the red line, which is to
                shoot to the right. Conversely, if the probability of the goalie
                diving to the right is more than a half, the best response would
                be the blue line, which is to shoot to the left.
            </Typography>
            <Typography component="span">
                In addition, there is no belief you can possibly hold given
                these numbers that could rationalize shooting the ball to the
                middle. In conclusion, middle is not a{" "}
                <ToolTip
                    {...toolTipQuickDefinitionProps}
                    href={"https://en.wikipedia.org/wiki/Best_response"}
                    description={
                        "The best response is the strategy (or strategies) which produces the most favorable outcome for a player, taking other players' strategies as given."
                    }
                    title={"Best Response"}
                >
                    <Typography {...toolTipQuickDefinitionLinkProps}>
                        best response
                    </Typography>
                </ToolTip>{" "}
                to any belief.
            </Typography>
        </StyledSlideContainer>
    );
};
