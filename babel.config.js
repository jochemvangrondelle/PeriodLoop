module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "~components": "./app/components",
            "~constants": "./app/constants",
            "~themes": "./app/themes",
            "~views": "./app/views",
            "~services": "./app/services",
            "~assets": "./app/assets",
            "~images": "./app/assets/images",
            "~animations": "./app/assets/animations",
            "~config": "./app/config",
            "~app": "./app",
          },
        },
      ],
    ],
  };
};
