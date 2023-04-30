import "@fontsource/roboto/400.css";
import {
    Breadcrumbs,
    Button,
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
import { BestResponse } from "./BestResponse/BestResponse";
import { Home } from "./Home";
import { MedianVoterTheorem } from "./MedianVoterTheorem";
import { PrisonerDilemma } from "./PrisonersDilemma";

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

    const handleHomeOnClick = () => {
        setContent(Content.Home);
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <StyledAppContainer>
                <StyledContentContainer maxWidth="sm" fixed>
                    {ContentMap[content]}
                </StyledContentContainer>
                <StyledBottomNav>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Button onClick={handleHomeOnClick}>
                            {Content.Home}
                        </Button>
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
