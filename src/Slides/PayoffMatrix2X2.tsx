import { Typography } from "@mui/material";
import {
    StyledCell,
    StyledCellBottomLeft,
    StyledCellContent,
    StyledCellData,
    StyledCellSeparator,
    StyledCellTopRight,
    StyledContainer,
    StyledRow,
} from "./PayoffMatrix2X2.styles";
import {
    IPayoffMatrixDataCellProps,
    IPayoffMatrixProps,
} from "./PayoffMatrix.types";

const PayoffMatrixDataCell: React.FC<IPayoffMatrixDataCellProps> = ({
    data,
    indices,
    highlightData,
}) => {
    const [v1, v2] = data;
    const [idx1, idx2] = indices;
    const res = highlightData?.find((el) => {
        const [el1, el2] = el.cell;
        return idx1 === el1 && idx2 === el2;
    });
    let highlightType1, highlightType2;
    if (res?.type) {
        [highlightType1, highlightType2] = res.type;
    }
    return (
        <StyledCellContent>
            <StyledCellData highlightType={highlightType1}>
                <Typography variant="h4">{v1}</Typography>
            </StyledCellData>
            <Typography variant="h4">,&nbsp;</Typography>
            <StyledCellData highlightType={highlightType2}>
                <Typography variant="h4">{v2}</Typography>
            </StyledCellData>
        </StyledCellContent>
    );
};

export const PayoffMatrix2X2: React.FC<IPayoffMatrixProps> = ({
    data,
    highlightBackground,
    highlightData,
}) => {
    const { p1, p2, r0, r1, c0, c1, d00, d01, d10, d11 } = data;

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
            </StyledRow>
        </StyledContainer>
    );
};
