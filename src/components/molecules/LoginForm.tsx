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
      <PrimaryButton text="Entrar" href={href} />
    </form>
  );
}
