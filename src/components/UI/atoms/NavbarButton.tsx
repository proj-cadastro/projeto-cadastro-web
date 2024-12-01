import { Button } from "@mui/material";

interface PrimaryButtonProps {
  text: string;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function NavbarButton({ text, href, onClick }: PrimaryButtonProps) {
  return (
    <Button      
      color="primary"      
      href={href}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
