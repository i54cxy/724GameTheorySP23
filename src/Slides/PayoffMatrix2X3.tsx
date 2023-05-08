import { Typography } from "@mui/material";
import { IPayoffMatrix3x2Props } from "./PayoffMatrix.types";
import {
    StyledCell,
    StyledCellBottomLeft,
    StyledCellSeparator,
    StyledCellTopRight,
    StyledContainer,
    StyledRow,
} from "./PayoffMatrix2X3.styles";
import { PayoffMatrixDataCell } from "./PayoffMatrixDataCell";
import { StyledCellContent } from "./PayoffMatrixDateCell.styles";

export const PayoffMatrix2X3: React.FC<IPayoffMatrix3x2Props> = ({
    data,
    highlightBackground,
    highlightData,
}) => {
    const { p1, p2, r0, r1, c0, c1, c2, d00, d01, d02, d10, d11, d12 } = data;

    return (
        <StyledContainer>
            <StyledRow>
                <StyledCell
                    indices={[0, 0]}
                    highlightBackground={highlightBackground}
                >
                    <StyledCellSeparator />
                    <StyledCellBottomLeft>
                        <Typography variant="h6">{p1}</Typography>
                    </StyledCellBottomLeft>
                    <StyledCellTopRight>
                        <Typography variant="h6">{p2}</Typography>
                    </StyledCellTopRight>
                </StyledCell>
                <StyledCell
                    indices={[0, 1]}
                    highlightBackground={highlightBackground}
                >
                    <StyledCellContent>
                        <Typography variant="h6">{c0}</Typography>
                    </StyledCellContent>
                </StyledCell>
                <StyledCell
                    indices={[0, 2]}
                    highlightBackground={highlightBackground}
                >
                    <StyledCellContent>
                        <Typography variant="h6">{c1}</Typography>
                    </StyledCellContent>
                </StyledCell>
                <StyledCell
                    indices={[0, 3]}
                    highlightBackground={highlightBackground}
                >
                    <StyledCellContent>
                        <Typography variant="h6">{c2}</Typography>
                    </StyledCellContent>
                </StyledCell>
            </StyledRow>
            <StyledRow>
                <StyledCell
                    indices={[1, 0]}
                    highlightBackground={highlightBackground}
                >
                    <StyledCellContent>
                        <Typography variant="h6">{r0}</Typography>
                    </StyledCellContent>
                </StyledCell>
                <StyledCell
                    indices={[1, 1]}
                    highlightBackground={highlightBackground}
                >
                    <PayoffMatrixDataCell
                        data={d00}
                        indices={[0, 0]}
                        highlightData={highlightData}
                    />
                </StyledCell>
                <StyledCell
                    indices={[1, 2]}
                    highlightBackground={highlightBackground}
                >
                    <PayoffMatrixDataCell
                        data={d01}
                        indices={[0, 1]}
                        highlightData={highlightData}
                    />
                </StyledCell>
                <StyledCell
                    indices={[1, 2]}
                    highlightBackground={highlightBackground}
                >
                    <PayoffMatrixDataCell
                        data={d02}
                        indices={[0, 1]}
                        highlightData={highlightData}
                    />
                </StyledCell>
            </StyledRow>
            <StyledRow>
                <StyledCell
                    indices={[2, 0]}
                    highlightBackground={highlightBackground}
                >
                    <StyledCellContent>
                        <Typography variant="h6">{r1}</Typography>
                    </StyledCellContent>
                </StyledCell>
                <StyledCell
                    indices={[2, 1]}
                    highlightBackground={highlightBackground}
                >
                    <PayoffMatrixDataCell
                        data={d10}
                        indices={[1, 0]}
                        highlightData={highlightData}
                    />
                </StyledCell>
                <StyledCell
                    indices={[2, 2]}
                    highlightBackground={highlightBackground}
                >
                    <PayoffMatrixDataCell
                        data={d11}
                        indices={[1, 1]}
                        highlightData={highlightData}
                    />
                </StyledCell>
                <StyledCell
                    indices={[2, 3]}
                    highlightBackground={highlightBackground}
                >
                    <PayoffMatrixDataCell
                        data={d12}
                        indices={[1, 2]}
                        highlightData={highlightData}
                    />
                </StyledCell>
            </StyledRow>
        </StyledContainer>
    );
};
