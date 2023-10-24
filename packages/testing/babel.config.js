// Needed for Jest to be able to parse typescript files
// https://jestjs.io/docs/getting-started#using-typescript

module.exports = {
  presets: [["@babel/preset-env", { targets: { node: "current" } }], "@babel/preset-typescript"],
};
