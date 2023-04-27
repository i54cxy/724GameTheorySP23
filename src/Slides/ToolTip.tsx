import { Button, CardActions, CardContent, Typography } from "@mui/material";
import { useState } from "react";
import { StyledToolTipCard, StyledToolTipContainer } from "./Slides.styles";
import { IToolTipProps } from "./Slides.types";

export const ToolTip: React.FC<IToolTipProps> = ({
    children,
    description,
    buttonLabel,
    href,
    title,
    umbrella,
}) => {
    const [visible, setVisible] = useState(false);

    const handleOnClick = () => {
        setVisible((visible) => !visible);
    };

    return (
        <StyledToolTipContainer onClick={handleOnClick}>
            {children}
            {visible && (
                <StyledToolTipCard>
                    <CardContent>
                        <Typography
                            sx={{ fontSize: 14 }}
                            color="text.secondary"
                            gutterBottom
                        >
                            {umbrella}
                        </Typography>
                        <Typography variant="h6" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2">{description}</Typography>
                    </CardContent>
                    {href!! && (
                        <CardActions>
                            <Button
                                href={href}
                                rel="noreferrer"
                                target="_blank"
                            >
                                {buttonLabel}
                            </Button>
                        </CardActions>
                    )}
                </StyledToolTipCard>
            )}
        </StyledToolTipContainer>
    );
};
