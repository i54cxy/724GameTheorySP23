import styled from "@emotion/styled";
import { Box, ButtonGroup, Card, Typography } from "@mui/material";

export const StyledSlideContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
`;

export const StyledSlidesContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
`;

export const StyledButtonGroup = styled(ButtonGroup)`
    bottom: 0px;
    position: absolute;
    right: 0px;
`

export const StyledToolTipContainer = styled.div`
    display: inline-block;
`;

export const StyledToolTipCard = styled(Card)`
    position: fixed;
    right: 30px;
    max-width: 240px;
`;