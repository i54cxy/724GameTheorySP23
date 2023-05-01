import styled from "@emotion/styled";
import { Button, Typography, css } from "@mui/material";

const size = 50;

export const StyledContainer = styled.div`
    align-self: center;
    display: flex;
    flex-direction: column;
    position: relative;
`;

export interface IStyledCellButtonProps {
    index: number;
    iteratedelimination: number;
}

const redColorPalette = ["#a70000", "#ff0000", "#ff5252", "#ff7b7b", "#ffbaba"];

export const StyledCellButton = styled(Button)<IStyledCellButtonProps>`
    display: flex;
    padding: 0px;
    height: ${size}px;
    width: ${size}px;
    align-items: center;
    justify-content: center;
    ${({ index, iteratedelimination: iteratedElimination }) => {
        const level = index > 4 ? 10 - index : index + 1;
        if (level <= iteratedElimination) {
            return css`
                background-color: ${redColorPalette[level - 1]};
            `;
        } else {
            return undefined;
        }
    }}
`;

export const StyledLabelContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: ${size}px;
    width: ${size * 10 - 9}px;
    margin-top: 10px;
`;

export const StyledTypography = styled(Typography)`
    height: ${size}px;
    width: ${size}px;
    text-align: center;
`;

export const StyledBackground = styled.div`
    border-radius: 4px;
    position: absolute;
    height: ${size}px;
    width: ${size * 10 - 9}px;
    display: flex;
    flex-direction: row;
`;

export interface IStyledBackgroundProps {
    percentage: number;
}

export const StyledBackgroundBlue = styled.div<IStyledBackgroundProps>`
    background-color: #205295;
    height: 100%;
    width: ${({ percentage }) => percentage}%;
`;

export const StyledBackgroundRed = styled.div<IStyledBackgroundProps>`
    background-color: #d21312;
    height: 100%;
    width: ${({ percentage }) => percentage}%;
`;
