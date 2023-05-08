import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { CellIndices } from "./PayoffMatrix.types";

const cellSize = 120;

const margin = 4;

interface IStyledCellProps {
    indices: CellIndices;
    highlightBackground?: CellIndices[];
}

export const StyledCell = styled.div<IStyledCellProps>`
    width: ${cellSize}px;
    height: ${cellSize}px;
    outline: 1px solid beige;
    position: relative;

    ${({ indices, highlightBackground }) => {
        const [i1, i2] = indices;
        return highlightBackground?.some((el) => {
            const [e1, e2] = el;
            return i1 === e1 && i2 === e2;
        })
            ? css`
                  background-color: #bb86fc44;
              `
            : undefined;
    }}
`;

export const StyledRow = styled.div`
    display: flex;
    flex-direction: row;
`;

export const StyledContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
`;

export const StyledCellSeparator = styled.div`
    height: 1px;
    width: ${cellSize * Math.sqrt(2)}px;
    background-color: beige;
    transform: rotate(45deg);
    transform-origin: top left;
`;

export const StyledCellBottomLeft = styled.div`
    align-items: center;
    bottom: ${margin}px;
    display: flex;
    height: ${(cellSize - margin) / 2}px;
    justify-content: center;
    left: ${margin}px;
    position: absolute;
    text-align: center;
    width: ${(cellSize - margin) / 2}px;
    line-break: anywhere;
`;

export const StyledCellTopRight = styled.div`
    align-items: center;
    display: flex;
    height: ${(cellSize - margin) / 2}px;
    justify-content: center;
    position: absolute;
    right: ${margin}px;
    top: ${margin}px;
    text-align: center;
    width: ${(cellSize - margin) / 2}px;
    line-break: anywhere;
`;
