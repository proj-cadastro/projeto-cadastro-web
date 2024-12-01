import Image from "next/image";

export default function LogoNavbar() {
  return (
    <Image
        alt="Logo Fatec Votorantim"
        src="/assets/logoFatecCapi.png"
        width={100}
        height={50}
        style={{ marginBottom: "1rem" }}
    />
  );
}