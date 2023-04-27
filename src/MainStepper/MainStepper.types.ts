import { IContentProps } from "../Content.types";

export interface IMainStepperProps extends IContentProps {
    children: React.ReactNode;
    contentIndex: number;
}