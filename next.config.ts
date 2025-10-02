module.exports = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ disables lint errors during build
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dn7uvrxer/image/**",
      },
    ],
  },
};

// https://res.cloudinary.com/dn7uvrxer/image/upload/v1758936810/property_f6td0y.png
