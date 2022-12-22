const presets = ['module:metro-react-native-babel-preset']
const plugins = []

plugins.push(
  [
    'module-resolver',
    {
      root: ['./'],
      extensions: ['.js', '.json'],
      alias: {
        '@Assets': './src/Assets',
        '@Commons': './src/Commons',
        '@Components': './src/Components',
        '@Config': './src/Config',
        '@Hooks': './src/Hooks',
        '@Containers': './src/Containers',
        '@Navigators': './src/Navigators',
        '@Services': './src/Services',
        '@Store': './src/Store',
        '@Theme': './src/Theme',
        '@Translations': './src/Translations',
        '@Models': './src/Models',
      },
    },
  ],
  'react-native-reanimated/plugin',
)

module.exports = {
  presets,
  plugins,
}
