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
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "new-projects-media.propertyfinder.com",
        port: "",
        pathname: "/project/**", 
      },
      {
        protocol: "https",
        hostname: "homeviewdubai.com",
        port: "",
        pathname: "/blogs/wp-content/uploads/**", 
      },
      {
        protocol: "https",
        hostname: "www.homeviewdubai.com",
        port: "",
        pathname: "/blogs/wp-content/uploads/**", 
      },
    ],
  },
};

// https://res.cloudinary.com/dn7uvrxer/image/upload/v1758936810/property_f6td0y.png
