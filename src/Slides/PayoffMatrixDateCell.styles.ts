import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { DataHighlightType } from "./PayoffMatrix.types";

const margin = 4;

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
