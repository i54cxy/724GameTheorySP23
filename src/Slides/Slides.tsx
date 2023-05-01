import { useEffect } from "react";
import { Content } from "../App.types";
import { ISlidesProps, StyledSlidesContainer } from "../Slides";
import { SlidesControls } from "../Slides/SlidesControls";

export const Slides: React.FC<ISlidesProps> = ({
    activeStep,
    breakpoints,
    currentSlide,
    setActiveStep,
    setContent,
    setCurrentSlide,
    slides,
}) => {
    useEffect(() => {
        setActiveStep(
            breakpoints.length -
                breakpoints
                    .slice()
                    .reverse()
                    .findIndex((bp) => {
                        return currentSlide >= bp;
                    }) -
                1
        );
    }, [breakpoints, currentSlide, setActiveStep, slides.length]);

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
        setContent((content) => {
            switch (content) {
                case Content.PrisonersDilemma:
                    return Content.MedianVoterTheorem;
                case Content.MedianVoterTheorem:
                    return Content.BestResponse;
                default:
                    return Content.Home;
            }
        });
    };

    return (
        <StyledSlidesContainer color="text.secondary">
            {currentSlide < slides.length && slides[currentSlide]}
            <SlidesControls
                index={currentSlide}
                total={slides.length}
                lastTopic={activeStep === 3}
                handlePrevious={handlePrevious}
                handleNext={handleNext}
                handleRestart={handleRestart}
                handleFinish={handleFinish}
            />
        </StyledSlidesContainer>
    );
};
