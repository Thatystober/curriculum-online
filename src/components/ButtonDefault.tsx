import Button from '@mui/material/Button';

interface ButtonProps {
    classButton: string,
    backgroundColor: string,
    text: string,
    bottom: string,
    right: string,
    width: string,
    borderRadius: string,
    href: string
}

export function ButtonDefault(
    {
        classButton, backgroundColor, text, bottom, right, width, borderRadius,
        href
    }: ButtonProps) {
    return(
        <Button variant="contained" className={classButton} sx={{ borderRadius: {borderRadius}, bottom: {bottom},  right: {right},
        width: {width}, backgroundColor: {backgroundColor}, color: '#fff'}} href={href} target="__blank">
            {text}
        </Button>
    )}