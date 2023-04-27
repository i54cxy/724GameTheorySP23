import styled from "@emotion/styled";
import { Box, Container } from "@mui/material";

export const StyledAppContainer = styled(Box)`
    background-color: #2b3640;
    display: flex;
    height: 100vh;
    width: 100%;
`;

export const StyledContentContainer = styled(Container)`
    align-self: center;
    border: 1px solid white;
    display: flex;
    justify-content: center;
    min-height: 640px;
    height: 61.8vh;
    overflow-y: hidden;
`;

export const StyledBottomNav = styled(Box)`
    bottom: 30px;
    display: flex;
    justify-content: center;
    position: fixed;
    width: 100%;
`