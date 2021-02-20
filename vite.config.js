import {resolve} from 'path';
import markdown from 'rollup-plugin-md';
import svelte from 'rollup-plugin-svelte';


export default {
    root: 'examples',
    build: {
        outDir: '../out',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve('examples/index.html'),
                columns: resolve('examples/columns/index.html'),
                demo: resolve('examples/demo/index.html'),
                events: resolve('examples/events/index.html'),
                hello: resolve('examples/hello-world/index.html'),
                performance: resolve('examples/performance/index.html')
            }    
        }
    },
    plugins: [
        markdown(),
        svelte()
    ],
    resolve: {
        alias: {
            '@activewidgets/svelte': resolve('./')
        }    
    }
}