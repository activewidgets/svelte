
[Open fullscreen](/performance/) | [Source on github](https://github.com/activewidgets/svelte/tree/master/examples/performance) 

This example shows virtualized scrolling + lazy loading performance (load as you scroll).

```html
<script>

import { Datagrid } from '@activewidgets/svelte';
import { lazy } from '@activewidgets/options';

// ...

let options = [
    lazy()
];

</script>

<Datagrid {columns} {rows} {options}/>
```

Read more:

- [Svelte Datagrid - Get started](https://activewidgets.com/guide/env/svelte/#data-properties)
- [API - columns](https://activewidgets.com/api/datagrid/columns/)
- [API - rows](https://activewidgets.com/api/datagrid/rows/)