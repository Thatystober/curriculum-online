import Button from '@mui/material/Button';
import '../styles/components/ButtonIcon.scss';
interface ButtonIconProps {
    text: string;
    backgroundColor: string;
    classButton: string;
    icon: any;
    link: string;
}


export function ButtonIcon({text, backgroundColor, classButton, icon, link}: ButtonIconProps) {
    return(
        <Button className={classButton} id="button-icon" sx={{ borderRadius: 2, backgroundColor: {backgroundColor}, color: '#fff', border: `1px solid ${backgroundColor}`}} variant="outlined" endIcon={icon} href={link}>
            {text}
        </Button>
    )}