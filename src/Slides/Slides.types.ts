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
    activeStep: number;
    breakpoints: number[];
    currentSlide: number;
    lastTopic?: boolean;
    setActiveStep: React.Dispatch<React.SetStateAction<number>>;
    setContent: React.Dispatch<React.SetStateAction<Content>>;
    slides: JSX.Element[];
    setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
}

export interface ISlidesControlsProps {
    handleFinish: () => void;
    handleNext: () => void;
    handlePrevious: () => void;
    handleRestart: () => void;
    index: number;
    lastTopic: boolean;
    total: number;
}

export const toolTipNoteProps = {
    buttonLabel: "Read more",
    umbrella: "Note",
};

export const toolTipQuickDefinitionProps = {
    buttonLabel: "Wikipedia Page",
    umbrella: "Quick Definition",
};

export const toolTipQuickDefinitionLinkProps = {
    color: "info.main",
    component: "a",
    sx: {
        cursor: "pointer",
    },
};

export const tollTipHighlightProps = {
    color: "info.main",
    component: "a",
};

export const tollTipWarningProps = {
    color: "warning.main",
    component: "a",
};
