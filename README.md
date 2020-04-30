### 

# ActiveWidgets/Svelte • Datagrid 

[![npm version](https://img.shields.io/npm/v/@activewidgets/svelte)](https://www.npmjs.com/package/@activewidgets/svelte "View this project on npm")
[![npm downloads](https://img.shields.io/npm/dm/@activewidgets/svelte)](https://www.npmjs.com/package/@activewidgets/svelte "npm package downloads/month")
[![Github issues](https://img.shields.io/github/issues/activewidgets/svelte)](https://github.com/activewidgets/svelte/issues "See Github issues")
[![Github repo](https://img.shields.io/github/stars/activewidgets/svelte?label=GitHub&style=social)](https://github.com/activewidgets/svelte "Open Github repo")

ActiveWidgets is a multi-framework UI component library. This package provides **datagrid component** for **Svelte**.

[Live demo](https://svelte.activewidgets.com) / [Developer guide](https://docs.activewidgets.com/guide/) / [API reference](https://docs.activewidgets.com/api/)

[![Datagrid demo](https://cdn.activewidgets.com/assets/screens/demo.png)](https://svelte.activewidgets.com)

- [Installation](#installation)
- [Usage](#usage)
- [Data properties](#data-properties)
- [User events](#user-events)

## Installation

Add [@activewidgets/svelte](/api/packages/svelte/) to your project dependencies -

```sh
> npm i --save @activewidgets/svelte
```

## Usage

Now you can import ActiveWidgets component classes -

```js
import { Datagrid } from "@activewidgets/svelte";
```

and use them like any standard Svelte component.

```html
<script>

import { Datagrid } from '@activewidgets/svelte';
import './styles.css';

let rows = [
    { message: 'Hello, World!' }
];

</script>

<Datagrid {rows} />
```
[Live example](/examples/svelte/hello-world/) | [Source on github](https://github.com/activewidgets/svelte/tree/master/examples/hello-world) | [Edit on Codesandbox](https://codesandbox.io/s/7c6i9)


## Data properties

You have to provide [columns](/api/datagrid/columns/) and [rows](/api/datagrid/rows/) properties to the datagrid to show some data. The properties of each `column` object define how the data will be rendered -

- [field](/api/datagrid/columns/#field) - where the cell data comes from (string|function)
- [header](/api/datagrid/columns/#header) - column header (string|object)
- [width](/api/datagrid/columns/#width) - column width (number, in pixels)
- [align](/api/datagrid/columns/#align) - cell text alignment (left|right|center)
- [format](/api/datagrid/columns/#format) - number/date format (string|function)
- [fixed](/api/datagrid/columns/#fixed) - fixed (true/false) for columns on the left or right side

The `style` (string|object) or `className` properties allow to change the styling of the column and cell elements.

```html
<script>
// ...

const columns = [
  {header: 'Code', field: 'customerID', width: 80, style: 'background:#def', fixed: true},
  {header: 'Company Name', field: 'companyName', width: 160},
  {header: 'Contact', field: 'contactName', width: 120},
  {header: 'Title', field: 'contactTitle', width: 120},
  {header: 'Address', field: 'address', width: 120, align: 'right'}
];

const rows = northwind.customers;

</script>

<Datagrid {columns} {rows} />
```
[Live example](/examples/svelte/columns/) | [Source on github](https://github.com/activewidgets/svelte/tree/master/examples/columns) | [Edit on Codesandbox](https://codesandbox.io/s/4ipzv)


## User events

In addition to the standard DOM keyboard and mouse events the datagrid emits composite 
[mouse](/api/datagrid/mouse-event/) event which makes it easier to find the elements affected by the user action -

```html
<script>
// ...

function onMouse({row}){
    alert(`row ${row.key} clicked!`);
}

</script>

<Datagrid {columns} {rows} on:mouse={e => onMouse(e.detail)} />
```
[Live example](/examples/svelte/events/) | [Source on github](https://github.com/activewidgets/svelte/tree/master/examples/events) | [Edit on Codesandbox](https://codesandbox.io/cdy4k)

## More info

- [Live demo](https://svelte.activewidgets.com) 
- [Developer guide](https://docs.activewidgets.com/guide/) 
- [API reference](https://docs.activewidgets.com/api/)
- [Licensing](https://activewidgets.com/licenses/)
- [Support forum](https://activewidgets.com/messages/)


---

[![ActiveWidgets](https://activewidgets.com/include/logo/aw-logo-40.png)](https://activewidgets.com) 
