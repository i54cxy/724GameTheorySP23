export interface IMVTSpectrumProps {
    interactive?: boolean;
    positions?: [number, number];
    setSelection?: React.Dispatch<React.SetStateAction<number>>;
    iteratedElimination?: number;
}
