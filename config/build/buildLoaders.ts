import webpack from 'webpack';
import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BabelLoader } from '../loaders/babelLoader';

// import { BuildCssLoader } from './loaders/buildCssLoader';

function BuildCssLoader (isDev: boolean) {
    return {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev? 'style-loader': MiniCssExtractPlugin.loader,
            // "style-loader", //вместо него мини css? чтобы стили были отдельными файликами
            // Translates CSS into CommonJS
            {
                loader:'css-loader',
                options:{
                    modules:{
                        auto: (resPath: string) => Boolean(resPath.includes('module.')),
                        localIdentName: isDev? '[path][name]__[local]': '[hash:base64:8]'
                    },
                }
            },  
            // Compiles Sass to CSS
            'sass-loader',
        ],
    };
}

export function buildLoaders( options: BuildOptions): webpack.RuleSetRule[] {
    const {isDev} = options;
    const svgLoader = {
        test: /\.svg$/i,
        use: ['@svgr/webpack'],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const babelLoader = BabelLoader(options);
  
    const cssLoader = BuildCssLoader(isDev);
    // если без TS, но нужен будет лоудер для jsx babel-loader
    const typescriptLoader =     {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        svgLoader,
        fileLoader,
        // babelLoader, /// not need
        typescriptLoader,
        cssLoader,
    ];
}