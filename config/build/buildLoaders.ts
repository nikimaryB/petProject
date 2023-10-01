import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

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
    const babelLoader = {
        test: /\.(js|tsx|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                'plugins': [
                    [
                        'i18next-extract', { locales: ['ru', 'en'], keyAsDefaultValue: true}
                    ]
                ]
            }
        }
    };
  
    const cssLoader = buildCssLoader(isDev);
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