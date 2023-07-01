import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack"
import { BuildOptions } from "./types/config";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev? "style-loader": MiniCssExtractPlugin.loader,
      // "style-loader", //вместо него мини css? чтобы стили были отдельными файликами
      // Translates CSS into CommonJS
      {
        loader:"css-loader",
        options:{
          modules:{
            auto: (resPath: string) => Boolean(resPath.includes('module.')),
            localIdentName: isDev? '[path][name]__[local]': '[hash:base64:8]'
          },
        }
      },  
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };
  // если без TS, но нужен будет лоудер для jsx babel-loader
  const typescriptLoader =     {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [
    typescriptLoader,
    cssLoader,
  ]
}