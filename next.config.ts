import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vacbomvfdqykxyoweulu.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/book-covers/png",
        search: "",
      },
    ],
  },
};

export default nextConfig;
