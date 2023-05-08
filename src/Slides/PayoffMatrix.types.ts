export interface IPayoffMatrix2x2 {
    // labels
    p1: string;
    p2: string;
    r0: string;
    r1: string;
    c0: string;
    c1: string;
    d00: CellData;
    d01: CellData;
    d10: CellData;
    d11: CellData;
}

export interface IPayoffMatrix2x3 {
    // labels
    p1: string;
    p2: string;
    r0: string;
    r1: string;
    c0: string;
    c1: string;
    c2: string;
    d00: CellData;
    d01: CellData;
    d02: CellData;
    d10: CellData;
    d11: CellData;
    d12: CellData;
}

export enum DataHighlightType {
    Superior,
    Inferior,
    Warning,
    None,
}

export type CellData = [number, number];

export type CellIndices = [number, number];

export type PayoffMatrixHighlightData = {
    cell: CellIndices;
    // determines how values 1 & 2 should be highlighted
    type: [DataHighlightType, DataHighlightType];
};

export interface IPayoffMatrix2x2Props {
    data: IPayoffMatrix2x2;
    highlightBackground?: CellIndices[];
    highlightData?: PayoffMatrixHighlightData[];
}

export interface IPayoffMatrix3x2Props {
    data: IPayoffMatrix2x3;
    highlightBackground?: CellIndices[];
    highlightData?: PayoffMatrixHighlightData[];
}

export interface IPayoffMatrixDataCellProps {
    data: [number, number];
    indices: CellIndices;
    highlightData?: PayoffMatrixHighlightData[];
}
