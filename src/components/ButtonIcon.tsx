import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';

interface ButtonIconProps {
    text: string;
    backgroundColor: string;
    classButton: string;
    icon: any;
}

export function ButtonIcon({text, backgroundColor, classButton, icon}: ButtonIconProps) {
    return(
        <Button className={classButton} sx={{ borderRadius: 2, backgroundColor: {backgroundColor}, color: '#fff', border: `1px solid ${backgroundColor}`}} variant="outlined" endIcon={icon}>
            {text}
        </Button>
    )}