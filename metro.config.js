const { getDefaultConfig } = require('metro-config');
const resolve = require('path').resolve;

const ROOT_FOLDER = resolve(__dirname, '');

module.exports = (async () => {
  const {
    resolver: { sourceExts }
  } = await getDefaultConfig();

  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-typescript-transformer'),
    },
    resolver: {
      sourceExts: [...sourceExts]
    },
    projectRoot: ROOT_FOLDER,
  };
})();
