export interface ISlideStepperProps {
    activeStep: number;
    breakpoints: number[];
    steps: { label: string }[];
    setActiveStep: React.Dispatch<React.SetStateAction<number>>;
    setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
}
