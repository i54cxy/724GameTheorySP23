export interface IPayoffMatrix {
    // labels
    p1: string;
    p2: string;
    r0: string;
    r1: string;
    c0: string;
    c1: string;
    d00: [number, number];
    d01: [number, number];
    d10: [number, number];
    d11: [number, number];
}

export enum DataHighlightType {
    Superior,
    Inferior,
    Warning,
    None,
}

type DataIndices = 0 | 1;
type DataCellIndices = [DataIndices, DataIndices];
export type PayoffMatrixHighlightData = {
    cell: DataCellIndices;
    // determines how values 1 & 2 should be highlighted
    type: [DataHighlightType, DataHighlightType];
};

type BGIndices = 0 | 1 | 2;
export type BGCell = [BGIndices, BGIndices];

export interface IPayoffMatrixProps {
    data: IPayoffMatrix;
    highlightBackground?: BGCell[];
    highlightData?: PayoffMatrixHighlightData[];
}

export interface IPayoffMatrixDataCellProps {
    data: [number, number];
    indices: DataCellIndices;
    highlightData?: PayoffMatrixHighlightData[];
}
