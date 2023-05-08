import { Typography } from "@mui/material";
import {
    StyledCellContent,
    StyledCellData,
} from "./PayoffMatrixDateCell.styles";
import { IPayoffMatrixDataCellProps } from "./PayoffMatrix.types";

export const PayoffMatrixDataCell: React.FC<IPayoffMatrixDataCellProps> = ({
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
