<!--
   Copyright (c) ActiveWidgets SARL. All Rights Reserved.
   This source code is licensed under the MIT license found in the
   LICENSE file in the root directory of this source tree.
 -->

<script>

import { Datagrid } from '@activewidgets/svelte';
import { columns, rows } from "@activewidgets/examples/data";
import './styles.css';


function onMouse({row}){
    alert(`row ${row.key} clicked!`);
}

</script>

<Datagrid {columns} {rows} on:mouse={e => onMouse(e.detail)} />