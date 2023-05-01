import { ButtonGroup, Typography } from "@mui/material";
import {
    StyledBackground,
    StyledBackgroundBlue,
    StyledBackgroundRed,
    StyledCellButton,
    StyledContainer,
    StyledLabelContainer,
    StyledTypography,
} from "./MVTSpectrum.styles";
import { IMVTSpectrumProps } from "./MVTSpectrum.types";

export const MVTSpectrum: React.FC<IMVTSpectrumProps> = ({
    interactive = false,
    iteratedElimination = 0,
    positions,
    setSelection,
}) => {
    let positionA: number | undefined = undefined,
        positionB: number | undefined = undefined,
        percentage: number | undefined = undefined;
    if (positions) {
        [positionA, positionB] = positions;
        percentage = (positionA + positionB - 1) * 5;
    }
    return (
        <StyledContainer>
            {percentage !== undefined && positionA !== positionB && (
                <StyledBackground>
                    <StyledBackgroundBlue percentage={percentage} />
                    <StyledBackgroundRed percentage={100 - percentage} />
                </StyledBackground>
            )}
            <ButtonGroup variant="outlined">
                {Array.from(Array(10)).map((e, index) => {
                    return (
                        <StyledCellButton
                            disableRipple={!interactive}
                            index={index}
                            iteratedelimination={iteratedElimination}
                            key={index}
                            onClick={() => {
                                if (interactive && setSelection) {
                                    setSelection(index + 1);
                                }
                            }}
                        >
                            <Typography
                                sx={{
                                    color:
                                        positionA === positionB
                                            ? "success.main"
                                            : "auto",
                                }}
                            >
                                {(positionA === index + 1 ? "A" : "") +
                                    (positionB === index + 1 ? " B" : "")}
                            </Typography>
                        </StyledCellButton>
                    );
                })}
            </ButtonGroup>
            <StyledLabelContainer>
                {Array.from(Array(10)).map((e, index) => {
                    return (
                        <StyledTypography key={index} variant="h5">
                            {index + 1}
                        </StyledTypography>
                    );
                })}
            </StyledLabelContainer>
        </StyledContainer>
    );
};
