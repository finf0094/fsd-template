import path from "path";
import { type ResolveOptions } from 'webpack'
import { type BuildOptions } from './types/config'

export function buildResolvers ({ paths }: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {
            '@': paths.src,
            styles: path.resolve(paths.src, 'app', 'styles'),
        }
    }
}
