"use client";

import { useState } from "react";
import LoginCard from "../../../components/UI/organisms/LoginCard";
import { UserService } from "../../../service/Service"; // Ajuste o caminho se necessário

export default function Login() {
  const [error, setError] = useState("");

  const handleLogin = async (credentials: {
    email: string;
    password: string;
  }) => {
    try {
      const response = await UserService.login(credentials);
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        window.location.href = "/home"; // Ou use useRouter
      }
    } catch (err) {
      setError("Usuário ou senha incorretos.");
      console.error("Erro ao fazer login:", err);
    }
  };

  return <LoginCard onLogin={handleLogin} error={error} />;
}
