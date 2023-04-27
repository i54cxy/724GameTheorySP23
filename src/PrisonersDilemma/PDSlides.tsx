import { useEffect, useState } from "react";
import { Content } from "../App.types";
import { ISlidesProps, StyledSlidesContainer } from "../Slides";
import { SlidesControls } from "../Slides/SlidesControls";
import { PDSlideA } from "./PDSlideA";
import { PDSlideB } from "./PDSlideB";
import { PDSlideC } from "./PDSlideC";
import { PDSlideZ } from "./PDSlideZ";

const slides = [<PDSlideA />, <PDSlideB />, <PDSlideC />, <PDSlideZ />];

export const PDSlides: React.FC<ISlidesProps> = ({
    setActiveStep,
    setContent,
}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const breakpoints = [2];
    useEffect(() => {
        setActiveStep(
            breakpoints
                .slice()
                .reverse()
                .findIndex((bp) => {
                    return currentSlide >= bp;
                }) + 1
        );
    }, [currentSlide]);
    const handlePrevious = () => {
        setCurrentSlide((currentSlide) => currentSlide - 1);
    };
    const handleNext = () => {
        setCurrentSlide((currentSlide) => currentSlide + 1);
    };
    const handleRestart = () => {
        setCurrentSlide(0);
    };
    const handleFinish = () => {
        setContent(Content.MedianVoterTheorem);
    };

    return (
        <StyledSlidesContainer color="text.secondary">
            {currentSlide < slides.length && slides[currentSlide]}
            <SlidesControls
                index={currentSlide}
                total={slides.length}
                handlePrevious={handlePrevious}
                handleNext={handleNext}
                handleRestart={handleRestart}
                handleFinish={handleFinish}
            />
        </StyledSlidesContainer>
    );
};
