import type { NextConfig } from "next";

// Exportação estática: gera a pasta `out/` com HTML puro.
// Funciona em qualquer hospedagem (inclusive Hostinger) sem servidor Node.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
