/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Viewer} from '@activewidgets/examples';
import * as pages from './examples.js';
import readme from '../demo/README.md';
import logo from './svelte.svg';
import pkg from '../../package.json';
import Dynamic from './dynamic.svelte';


let framework = 'Svelte',
    container = document.getElementById('app');

container.innerHTML = '';

let dynamic = new Dynamic({
    target: container
});


function mount(component, props){
    dynamic.$set({props});
}


function clean(){
    dynamic.$set({props: undefined});
}


const viewer = new Viewer({
    target: document.body,
    props: {framework, pkg, logo, readme, pages, mount, clean}
});
