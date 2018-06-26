import webpack from 'webpack';
import webpackMerge from 'webpack-merge';
import prodConfig from './prod.babel';


export default webpackMerge(
    prodConfig,
    {
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('staging'),
                '__DEV__': false,
                '__STAGING__': true,
                '__PROD__': false,
            }),
        ]
    }
);
