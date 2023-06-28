import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildPath } from './config/build/types/config';
import path from 'path';

const paths: BuildPath = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  html: path.resolve(__dirname, 'public', 'index.html'),
  build: path.resolve(__dirname, 'build'),
};

const mode = 'development';
const isDev = mode === 'development';
const config: webpack.Configuration = buildWebpackConfig({
  mode,
  paths,
  isDev,
});

export default config;