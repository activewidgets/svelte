import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import image from 'rollup-plugin-img';
import livereload from 'rollup-plugin-livereload';
import postcss from 'rollup-plugin-postcss';
import sourcemaps from 'rollup-plugin-sourcemaps';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'src/main.js',
    output: {
        name: 'app',
        file: 'build/bundle.js',
        sourcemap: true
    },
    plugins: [
        postcss(),
        image(),
        sourcemaps(),

        svelte({
            dev: !production,
            emitCss: true
        }),

        resolve({
            browser: true,
            dedupe: ['svelte']
        }),

        commonjs(),

        !production && serve(),
        !production && livereload('./'),

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

                require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
                    stdio: ['ignore', 'inherit', 'inherit'],
                    shell: true
                });
            }
        }
    };
}
