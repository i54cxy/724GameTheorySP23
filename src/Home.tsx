import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    Typography,
} from "@mui/material";
import React from "react";
import { Content } from "./App.types";
import { IContentProps } from "./Content.types";
import { StyledCardContainer } from "./Home.styles";

export const Home: React.FC<IContentProps> = ({ setContent }) => {
    return (
        <Box>
            <Typography align="center" color="text.primary" variant="h4">
                Game Theory Demos
            </Typography>
            <Typography
                align="center"
                color="text.secondary"
                variant="body1"
                sx={{ marginTop: "30px" }}
            >
                Explore basic concepts and common problems in Game Theory with
                the following demos:
            </Typography>
            <StyledCardContainer>
                <Card sx={{ backgroundColor: "#003f5c" }}>
                    <CardActionArea
                        onClick={() => {
                            setContent(Content.PrisonersDilemma);
                        }}
                    >
                        <CardContent>
                            <Typography variant="h5" component="div">
                                The Prisoner's Dilemma
                            </Typography>
                            <Typography color="text.secondary" variant="body2">
                                Introduction to the classic thought experiment
                                and Game Theory basics.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </StyledCardContainer>
            <StyledCardContainer>
                <Card sx={{ backgroundColor: "#58508d" }}>
                    <CardActionArea
                        onClick={() => {
                            setContent(Content.MedianVoterTheorem);
                        }}
                    >
                        <CardContent>
                            <Typography variant="h5" component="div">
                                The Median Voter Theorem
                            </Typography>
                            <Typography color="text.secondary" variant="body2">
                                Discover how Game Theory explain econimic and
                                political behaviors.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </StyledCardContainer>
            <StyledCardContainer>
                <Card sx={{ backgroundColor: "#bc5090" }}>
                    <CardActionArea
                        onClick={() => {
                            setContent(Content.BestResponse);
                        }}
                    >
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Best Response Analysis: Penalty Kick
                            </Typography>
                            <Typography color="text.secondary" variant="body2">
                                See how Game Theory analysis can help you get
                                the upper hand in soccer.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </StyledCardContainer>
        </Box>
    );
};
