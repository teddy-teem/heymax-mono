export default {
    presets: ["next/babel", "module:metro-react-native-babel-preset"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "react-native": "react-native-web",
          },
        },
        'react-native-reanimated/plugin'
      ],
    ],
  };