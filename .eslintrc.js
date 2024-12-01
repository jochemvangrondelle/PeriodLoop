module.exports = {
  extends: ["universe", "universe/native", "expo", "prettier"],
  plugins: ["prettier"],
  ignorePatterns: ["/dist/*"],
  rules: {
    "prettier/prettier": "error",
  },
};