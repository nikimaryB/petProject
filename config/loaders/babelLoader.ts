import { BuildOptions } from '../build/types/config';

export const BabelLoader = (options: BuildOptions) => {
    const {isDev} = options;
    return {
        test: /\.(js|tsx|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                'plugins': [
                    [
                        'i18next-extract', { locales: ['ru', 'en'], keyAsDefaultValue: true}
                    ],
                    isDev && require.resolve('react-refresh/babel'),
                ].filter(Boolean)
            }
        }
    };
};