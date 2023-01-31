const path = require('path');
const thePlugin = require('../dist').default;
const pluginTester = require('babel-plugin-tester').default;

pluginTester({
    plugin: thePlugin,
    pluginName: 'babel-preset-preftransform-variable-declarations-with-var',
    fixtures: path.resolve('./test/fixtures'),
});
