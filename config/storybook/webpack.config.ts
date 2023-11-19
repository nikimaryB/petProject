import webpack from 'webpack';
import { BuildPath } from '../build/types/config';
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// import { BuildCssLoader } from '../loaders/buildCssLoader';

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

export default ({config}: {config: webpack.Configuration}) => {
    const paths: BuildPath ={
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    };
    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');
    config.module?.rules?.push(BuildCssLoader(true));

    if(config.module?.rules != undefined){
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        config.module.rules = config.module.rules.map((rule: any)  => {
            if(/svg/.test(rule.test as string))
                return {...rule, exclude: /\.svg$/i};
            return rule;
        });
    }

    config.module?.rules?.unshift({
        test: /\.svg$/i,
        use: ['@svgr/webpack'],
    });

    // config!.module!.rules.push({
    //     test: /\.svg$/,
    //     use: ['@svgr/webpack'],
    // });
    // config!.module!.rules.push(BuildCssLoader(true));

    // config!.plugins!.push(new DefinePlugin({
    //     __IS_DEV__: JSON.stringify(true),
    //     __API__: JSON.stringify(''),
    // }));

    return config;
};

