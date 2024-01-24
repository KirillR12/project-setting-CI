import webpack, { RuleSetRule } from 'webpack'
import path from 'path'
import { BuildPaths } from '../build/types/config'
import { cssLoader } from '../build/loaders/cssLoader'

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        html: '',
        entry: '',
        build: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    }

    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i }
        }
        return rule
    })

    config.resolve.modules.push(paths.src)
    config.resolve.extensions.push('.tsx', '.ts', '.js')
    config.module.rules.push(cssLoader(true))
    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    })
    return config
}
