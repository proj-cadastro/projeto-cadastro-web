import { Box } from "@mui/material";
import InputField from "../atoms/InputField";
import PrimaryButton from "../atoms/PrimaryButton";

interface LoginFormProps {
  href: string;
}

export default function LoginForm({ href }: LoginFormProps) {
  return (
    <form>
      <InputField id="user" label="Usuário" autoFocus />
      <InputField id="password" label="Senha" type="password" />
      <Box
        sx={{
          mt: 1,
        }}
      >
        <PrimaryButton text="Entrar" href={href} />
      </Box>
    </form>
  );
}
