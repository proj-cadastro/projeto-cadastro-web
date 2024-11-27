import { Link } from "@mui/material";

interface StyledLinkProps {
  text: string;
  href: string;
}

export default function StyledLink({ text, href }: StyledLinkProps) {
  return (
    <Link href={href} color="primary" underline="hover">
      {text}
    </Link>
  );
}
