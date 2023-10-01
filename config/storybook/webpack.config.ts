import webpack from 'webpack';
import { BuildPath } from '../build/types/config';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({config}: {config: webpack.Configuration}) => {
    const paths: BuildPath ={
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    };
    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');
    config.module?.rules?.push(buildCssLoader(true));

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

    return config;
};

