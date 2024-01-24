import webpack from 'webpack'
import { BuildOptions } from './types/config'
import { cssLoader } from './loaders/cssLoader'

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    const stylesLoader = cssLoader(isDev)

    return [
        typeScriptLoader,
        stylesLoader,
        svgLoader,
        fileLoader,
    ]
}
