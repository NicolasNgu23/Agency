import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    domains: [], // Ajoute ici les domaines si ton image vient d'une URL externe
  },
};

export default nextConfig;
