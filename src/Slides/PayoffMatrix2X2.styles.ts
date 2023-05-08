import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { BGCell, DataHighlightType } from "./PayoffMatrix.types";

const cellSize = 120;

const margin = 4;

interface IStyledCellProps {
    indices: BGCell;
    highlightBackground?: BGCell[];
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

export const StyledCellContent = styled.div`
    align-items: center;
    display: flex;
    margin: ${margin}px;
    height: calc(100% - ${margin * 2}px);
    justify-content: center;
    text-align: center;
    width: calc(100% - ${margin * 2}px);
`;

interface IStyledCellDataProps {
    highlightType?: DataHighlightType;
}

export const StyledCellData = styled.div<IStyledCellDataProps>`
    display: inline;
    ${({ highlightType }) => {
        switch (highlightType) {
            case DataHighlightType.Superior: {
                return css`
                    color: #66bb6a;
                `;
            }
            case DataHighlightType.Inferior: {
                return css`
                    color: #f44336;
                `;
            }
            case DataHighlightType.Warning: {
                return css`
                    color: #ffa726;
                `;
            }
            default: {
                return undefined;
            }
        }
    }}
`;
