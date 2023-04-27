import { Content } from "../App.types";

export interface IToolTipProps {
    children: React.ReactNode;
    description: string;
    href?: string;
    buttonLabel?: string;
    title?: string;
    umbrella?: string;
}

export interface ISlidesProps {
    setActiveStep: React.Dispatch<React.SetStateAction<number>>;
    setContent: React.Dispatch<React.SetStateAction<Content>>;
}

export interface ISlidesControlsProps {
    index: number;
    total: number;
    handlePrevious: () => void;
    handleNext: () => void;
    handleRestart: () => void;
    handleFinish: () => void;
}