<!--
   Copyright (c) ActiveWidgets SARL. All Rights Reserved.
   This source code is licensed under the MIT license found in the
   LICENSE file in the root directory of this source tree.
 -->

<script>
    import { Datagrid } from '@activewidgets/svelte';
    export let props;
</script>

{#if props}
    <Datagrid {...props}/>
{/if}