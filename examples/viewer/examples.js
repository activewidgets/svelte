/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import performance from '../performance/README.md';
import hello_world from '../hello-world/README.md';
import columns from '../columns/README.md';
import events from '../events/README.md';


export const Local = {
    'Performance': {path: 'performance', readme: performance},
    'Hello, World!': {path: 'hello-world', readme: hello_world},
    'Columns, rows': {path: 'columns', readme: columns},
    'User events': {path: 'events', readme: events}
};

export * from '@activewidgets/examples/shared';