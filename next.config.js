module.exports = {
  i18n: {
    locales: ["nl", "en"],
    defaultLocale: "nl",
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};
