
[Open fullscreen](/columns/) | [Source on github](https://github.com/activewidgets/svelte/tree/master/examples/columns) | [Edit on Codesandbox](https://codesandbox.io/s/4ipzv)

This example shows how to configure datagrid columns:

```html
<script>

import { Datagrid } from '@activewidgets/svelte';
import { northwind } from "@activewidgets/examples/data";

const columns = [
  {header: 'Code', field: 'customerID', width: 80, style: 'background:#def', fixed: true},
  {header: 'Company Name', field: 'companyName', width: 160},
  {header: 'Contact', field: 'contactName', width: 120},
  {header: 'Title', field: 'contactTitle', width: 120},
  {header: 'Address', field: 'address', width: 120},
  {header: 'City', field: 'city'},
  {header: 'Zip', field: 'postalCode', align: 'right'},
  {header: 'Phone', field: 'phone'},
  {header: 'Fax', field: 'fax'},
  {header: 'Country', field: 'country'}
];

const rows = northwind.customers;

</script>

<Datagrid {columns} {rows} />
```

Assign an array of column descriptor objects to the [columns](https://docs.activewidgets.com/api/datagrid/columns/) property.

Read more:

- [Svelte Datagrid - Get started](https://docs.activewidgets.com/guide/env/svelte/#data-properties)
- [API - columns](https://docs.activewidgets.com/api/datagrid/columns/)
- [API - rows](https://docs.activewidgets.com/api/datagrid/rows/)