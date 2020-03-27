import resolve from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';
import json from '@rollup/plugin-json';
import svelte from 'rollup-plugin-svelte';
import babel from 'rollup-plugin-babel';
import copy from 'rollup-plugin-copy';
import image from 'rollup-plugin-img';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import markdown from 'rollup-plugin-md';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
    input: {
        'columns': 'examples/columns/src/main.js',
        'demo': 'examples/demo/src/main.js',
        'events': 'examples/events/src/main.js',
        'hello-world': 'examples/hello-world/src/main.js',
        'viewer': 'examples/viewer/index.js'
    },
    output: {
        chunkFileNames: 'build/[name].js',
        entryFileNames: '[name]/build.js',
        sourcemap: true,
        name: 'app',
        dir: 'out'
    },
    manualChunks: {
        data: ['@activewidgets/examples/data'],
        flags: ['@activewidgets/examples/flags']
    },
    plugins: [
        postcss({extract: 'out/build/external.css'}),
        json (),
        image({limit: 100000}),
        markdown(),
        svelte({
            // enable run-time checks when not in production
            dev: !production,
            // we'll extract any component CSS out into
            // a separate file  better for performance
            css: css => {
                css.write('out/build/bundle.css');
            }
        }),

        // If you have external dependencies installed from
        // npm, you'll most likely need these plugins. In
        // some cases you'll need additional configuration 
        // consult the documentation for details:
        // https://github.com/rollup/rollup-plugin-commonjs
        resolve({
            browser: true,
            dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
        }),

        commonjs(),

        alias({entries: {
            '@activewidgets/svelte': __dirname
        }}),

        babel({
            babelrc: false,
            exclude: ['node_modules/!svelte/**'],
            presets: [["@babel/env", {targets: {ie: 11}}]]
        }),

        copy({
          targets: [
            { src: 'examples/**/index.html', dest: 'out' },
            { src: 'examples/**/styles.css', dest: 'out' }
          ],
          flatten: false
        }),

        // In dev mode, call `npm run start` once
        // the bundle has been generated
        !production && serve(),

        // Watch the `public` directory and refresh the
        // browser on changes when not in production
        !production && livereload('out'),

        // If we're building for production (npm run build
        // instead of npm run dev), minify
        production && terser()
    ],
    watch: {
        clearScreen: false
    }
};

function serve() {
    let started = false;

    return {
        writeBundle() {
            if (!started) {
                started = true;

                require('child_process').spawn('npm', ['run', 'serve', '--', '--dev'], {
                    stdio: ['ignore', 'inherit', 'inherit'],
                    shell: true
                });
            }
        }
    };
}