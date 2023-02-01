import path from 'path';
import { defineConfig } from 'vite';
import packageJson from './package.json';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

const getPackageName = () => {
    return packageJson.name.split('/').pop() ?? packageJson.name;
};

const getPackageNameCamelCase = () => {
    try {
        return getPackageName().replace(/-./g, (char) => char[1].toUpperCase());
    } catch (err) {
        throw new Error('Name property in package.json is missing.');
    }
};

const fileName = {
    es: `${getPackageName()}.mjs`,
    cjs: `${getPackageName()}.cjs`,
    iife: `${getPackageName()}.iife.js`,
    umd: `${getPackageName()}.umd.js`,
};

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
        }),
    ],
    server: {
        cors: { origin: '*' },
    },
    base: './',
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/main.ts'),
            name: getPackageNameCamelCase(),
            formats: ['es', 'cjs', 'iife', 'umd'],
            fileName: (format) => fileName[format],
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'styled-components'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
});
