/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import css from '@activewidgets/datagrid/style';
import styleInject from 'style-inject';
export * from '../js/index.js';

styleInject(css, {insertAt: 'top'});
