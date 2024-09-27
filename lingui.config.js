/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
  locales: ["en", "nb"],
  sourceLocale: "nb",
  catalogs: [
    {
      path: "<rootDir>/locales/{locale}/messages",
      include: ["src", "pages"],
    },
  ],
  format: "po",
};