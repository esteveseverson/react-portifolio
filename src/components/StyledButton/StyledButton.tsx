import styled from "@emotion/styled"
import theme from "../../theme.ts"
import { ReactNode } from "react"

interface StyledButtonProps {
    children: ReactNode
}

const StyledButton: React.FC<StyledButtonProps> = ({children}) => {

    const StyledButton = styled("button")(() => ({
        backgroundColor: 'transparent',
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: '3px',
        padding: '5px 15px',
        width: '100%',
        color: theme.palette.primary.contrastText,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        '&:hover': {
            backgroundColor: theme.palette.secondary.main
        }
    }))

    return (
        <>
            <StyledButton>
                {children}
            </StyledButton>
        </>
    )


}

export default StyledButton