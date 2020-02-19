<!--
   Copyright (c) ActiveWidgets SARL. All Rights Reserved.
   This source code is licensed under the MIT license found in the
   LICENSE file in the root directory of this source tree.
 -->

<script>

import '@activewidgets/html';
import { columns, rows } from "@activewidgets/examples/data";
import './styles.css';


function onMouse({row}){
    alert(`row ${row.key} clicked!`);
}

</script>

<ax-datagrid {columns} {rows} on:mouse={e => onMouse(e.detail)}></ax-datagrid>