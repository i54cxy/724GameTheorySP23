import { Typography } from "@mui/material";
import { StyledSlideContainer } from "../Slides/Slides.styles";
import { BRChart } from "./BRChart";
import { labels, options } from "./BRChart.types";

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
        {
            label: "Middle",
            data: [6, 6],
            borderColor: "rgb(97, 122, 85)",
            backgroundColor: "rgba(97, 122, 85, 0.5)",
            yAxisID: "y1",
        },
        {
            label: "Right",
            data: [9, 4],
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            yAxisID: "y1",
        },
    ],
};

export const BRSlideH = () => {
    return (
        <StyledSlideContainer>
            <BRChart options={options} data={data} />
            <Typography component="span">
                Finally, if we shoot to the right and the goalie dives to the
                left, our payoff is 9. If we shoot to the right and the goalie
                dives to the right, our payoff is 4.
            </Typography>
        </StyledSlideContainer>
    );
};
