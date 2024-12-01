import { useState } from "react";
import { Box } from "@mui/material";
import InputField from "../atoms/InputField"; // Certifique-se de que o caminho está correto
import PrimaryButton from "../atoms/PrimaryButton"; // Certifique-se de que o caminho está correto

interface LoginFormProps {
  onLogin: (credentials: { email: string; password: string }) => Promise<void>;
  error: string; // Adicionando a prop de erro para exibição
}

export default function LoginForm({ onLogin, error }: LoginFormProps) {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin(credentials);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        id="email"
        label="Email"
        autoFocus
        value={credentials.email}
        onChange={(e) =>
          setCredentials({ ...credentials, email: e.target.value })
        }
      />
      <InputField
        id="password"
        label="Senha"
        type="password"
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      {error && <div style={{ color: "red" }}>{error}</div>}{" "}
      {/* Exibe mensagem de erro, se existir */}
      <Box sx={{ mt: 1 }}>
        <PrimaryButton text="Entrar" type="submit" />
      </Box>
    </form>
  );
}
