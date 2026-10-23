import type { NextConfig } from "next";

// Exportação estática: gera a pasta `out/` com HTML puro.
// Funciona em qualquer hospedagem (inclusive Hostinger) sem servidor Node.
const nextConfig: NextConfig = {
  output: "export",
  // Pasta separada no modo dev, para `npm run build` não quebrar um `npm run dev` aberto.
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
