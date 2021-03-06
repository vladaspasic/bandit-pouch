const path = require('path');
const componentsQuery = require('./queries/components');

exports.onCreateWebpackConfig = ({
  actions,
  stage,
  plugins,
}) => {
  actions.setWebpackConfig({
    devtool: stage.includes('develop')
      ? 'cheap-inline-module-source-map'
      : 'source-map',
    resolve: {
      alias: {
        'bandit-pouch$': path.resolve(__dirname, '../src/index'),
      },
    },
    plugins: [
      plugins.define({
        __IS_DEV__: stage === 'develop' || stage === 'develop-html',
      }),
    ],
  });
};

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: '@babel/plugin-proposal-export-namespace-from',
  });
  actions.setBabelPlugin({
    name: '@babel/plugin-proposal-export-default-from',
  });
};

exports.createPages = ({ graphql, boundActionCreators }) => new Promise((resolve, reject) => {
  componentsQuery(graphql).then(({ data, errors }) => {
    if (errors) {
      return reject(errors);
    }

    const page = path.resolve('./src/pages/api.js');
    const components = data.allComponentMetadata.edges.map(({ node }) => node);

    boundActionCreators.createPage({
      context: { components },
      component: page,
      path: '/api',
    });

    components.forEach(node => boundActionCreators.createPage({
      context: { components, metadata: node },
      path: `/api/${node.displayName}`,
      component: page,
    }));

    return resolve();
  }).catch(reject);
});
