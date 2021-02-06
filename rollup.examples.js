import resolve from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import svelte from 'rollup-plugin-svelte';
import copy from 'rollup-plugin-copy';
import image from 'rollup-plugin-img';
import livereload from 'rollup-plugin-livereload';
import markdown from 'rollup-plugin-md';
import postcss from 'rollup-plugin-postcss';
import sourcemaps from 'rollup-plugin-sourcemaps';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
    input: {
        'columns': 'examples/columns/src/main.js',
        'demo': 'examples/demo/src/main.js',
        'events': 'examples/events/src/main.js',
        'hello-world': 'examples/hello-world/src/main.js',
        'performance': 'examples/performance/src/main.js',
        'viewer': 'examples/viewer/main.js'
    },
    output: {
        chunkFileNames: 'viewer/build/[name].js',
        entryFileNames: '[name]/build/bundle.js',
        sourcemap: true,
        name: 'app',
        dir: 'out'
    },
    manualChunks: {
        data: ['@activewidgets/examples/data'],
        flags: ['@activewidgets/examples/flags']
    },
    plugins: [
        postcss(),
        json (),
        image(),
        markdown(),
        sourcemaps(),

        svelte({
            dev: !production,
            emitCss: true
        }),

        resolve({
            browser: true,
            dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
        }),

        commonjs(),

        alias({entries: {
            '@activewidgets/svelte': __dirname
        }}),

        copy({
          targets: [{ src: 'examples/**/index.html', dest: 'out' }],
          flatten: false,
          copyOnce: true
        }),

        !production && serve(),
        !production && livereload('out'),

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

                require('open')('http://localhost');
            }
        }
    };
}