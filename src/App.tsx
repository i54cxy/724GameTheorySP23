import "@fontsource/roboto/400.css";
import {
    Breadcrumbs,
    Link,
    ThemeProvider,
    Typography,
    createTheme,
} from "@mui/material";
import { ReactElement, useState } from "react";
import {
    StyledAppContainer,
    StyledBottomNav,
    StyledContentContainer,
} from "./App.styles";
import { Content } from "./App.types";
import { Home } from "./Home";
import { PrisonerDilemma } from "./PrisonersDilemma";
import { MedianVoterTheorem } from "./MedianVoterTheorem";
import { BestResponse } from "./BestResponse/BestResponse";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

export const App = () => {
    const [content, setContent] = useState<Content>(Content.Home);

    const ContentMap: { [key in Content]: ReactElement } = {
        [Content.Home]: <Home setContent={setContent} />,
        [Content.PrisonersDilemma]: <PrisonerDilemma setContent={setContent} />,
        [Content.MedianVoterTheorem]: (
            <MedianVoterTheorem setContent={setContent} />
        ),
        [Content.BestResponse]: <BestResponse setContent={setContent} />,
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <StyledAppContainer>
                <StyledContentContainer maxWidth="sm" fixed>
                    {ContentMap[content]}
                </StyledContentContainer>
                <StyledBottomNav>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link color="inherit" underline="hover" href="/">
                            {Content.Home}
                        </Link>
                        {content !== Content.Home && (
                            <Typography color="text.primary">
                                {content}
                            </Typography>
                        )}
                    </Breadcrumbs>
                </StyledBottomNav>
            </StyledAppContainer>
        </ThemeProvider>
    );
};
