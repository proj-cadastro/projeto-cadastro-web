import Image from "next/image";

export default function LogoImage() {
  return (
    <Image
      alt="Logo Fatec Votorantim"
      src="/assets/logoFatecCapi.png"
      width={300}
      height={100}
      style={{ marginBottom: "1rem" }}
    />
  );
}
