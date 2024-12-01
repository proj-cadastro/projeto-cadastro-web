import { MenuItem } from "@mui/material";

interface MenuItemNavbarProps {
    text: string;
    onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    href?: string
    
}

export default function MenuItemNavbar({ text, onClick, href }: MenuItemNavbarProps) {
    return (
        <MenuItem
            onClick={(event) => {
                if (onClick) onClick(event); 
                if (href) {
                    window.location.href = href;
                } 
            }}
            >
                {text}
        </MenuItem>
    )
}