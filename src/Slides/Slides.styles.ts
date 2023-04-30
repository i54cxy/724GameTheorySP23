import styled from "@emotion/styled";
import { Box, ButtonGroup, Card } from "@mui/material";

export const StyledSlideContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    margin-top: 1px;
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
`;

export const StyledToolTipContainer = styled.div`
    display: inline-block;
`;

export const StyledToolTipCard = styled(Card)`
    max-width: 240px;
    position: fixed;
    right: 30px;
    transform: translateY(-50%);
`;
