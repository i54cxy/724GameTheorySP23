import { Typography } from "@mui/material";
import { StyledSlideContainer } from "../Slides/Slides.styles";
import { BRChart } from "./BRChart";
import { labels, options } from "./BRChart.types";
import { tollTipHighlightProps } from "../Slides";

const data = {
    labels,
    datasets: [
        {
            label: "Left",
            data: [4, 9],
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 162, 235, 0.5)",
            yAxisID: "y1",
        },
    ],
};

export const BRSlideF = () => {
    return (
        <StyledSlideContainer>
            <BRChart options={options} data={data} />
            <Typography component="span">
                We draw a picture of our expected payoff depending on the
                probability of what we believe the goalie is going to do.
            </Typography>
            <Typography component="span">
                On the horizontal axis, we have the probability of the goalie{" "}
                <Typography {...tollTipHighlightProps}>
                    diving to the right
                </Typography>
                . We start with the possibility of the shooter shooting to the
                left.
            </Typography>
            <Typography component="span">
                On the left y axis, the probablity of the goalie diving to the
                right is 0, meaning that the goalie dives to the left. The
                payoff of the shooter shooting left and the goalie diving left
                is 4 (40% chance of scoring).
            </Typography>
            <Typography component="span">
                On the right y axis, the payoff of us shooting to the left and
                the goalie diving to the right is 9. We know this is going to be
                a straight line in between, so let's plot that line with a blue
                color, shown above.
            </Typography>
        </StyledSlideContainer>
    );
};
