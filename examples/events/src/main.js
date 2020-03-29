/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import App from './app.svelte';

var app = new App({
    target: document.body,
    anchor: document.body.firstElementChild
});

export default app;