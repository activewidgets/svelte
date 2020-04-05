
[Open fullscreen](/demo/) | [Source on github](https://github.com/activewidgets/svelte/tree/master/examples/demo) | [Edit on Codesandbox](https://codesandbox.io/s/fgqbx)

This is a simple demo showing some of the features of ActiveWidgets/Svelte datagrid -

- Virtualized scrolling
- Fixed headers and columns
- Custom cell templates (slots with props)
- Dynamic styles
- Calculated values
- Multi-line/multi-value cells
- Cell images, icons, custom styles
- Rendering outside of cell/row boundaries
- International number/date formats
- Custom column types (presets)

### Virtualized scrolling

The datagrid implements virtualized scrolling - rendering only the visible rows and adding/removing extra rows on the fly 
while the content window shifts up/down. We use CSS transforms for the smooth and natural movement of the content layer. 
This way scrolling is GPU-accelerated and runs in a separate composer thread not affected by scripting
and rendering of the new rows.

The dataset in this example is not very big, however with virtualized scrolling the datagrid performance depends 
only on the window size and not the total number of rows, so the datagrid can easily handle millions of rows.

Virtualized scrolling is on by default.

### Fixed headers and columns

The headers section remains always visible - it does not move up/down with the regular rows. 
You can also make left and/or right columns 'fixed', so they remain always visible during horizontal scroll.

```js
const columns = [
    { header: 'Company', template: 'company', fixed: true },
    // ...
];
```

### Custom cell templates

One of the goals for the new component was to make it very easy to customize every part of the datagrid.
In this example we use Svelte named slots to define several custom cell templates.

```html
<Datagrid {columns} {rows} {options} {onRow}>

    <div slot="company" let:data>
        <div class="bold blue">{data.customerID}</div>
        <div class="small">{data.companyName}</div>
    </div>

    <div slot="address" let:data>
        <div class="small">{data.address}</div>
        <div class="small">{data.postalCode} <span>{data.city}</span></div>
    </div>

    <div slot="country" let:text>
        <img src={flags[text]} alt={text} />{text}
    </div>

</Datagrid>
```

All you have to do it to add a named slot with props to the datagrid and then use its name in template property in column descriptor.

```js
const columns = [
    { header: 'Company', template: 'company', fixed: true },
    { header: 'Contact', template: 'contact', style: 'background:#f4f4f4', key: 'contact' },
    { header: 'Address', template: 'address', key: 'address' },
    // ...
];
```

### Dynamic styles

You can access and modify a row model object via onRow event before render. Inspect the row data
and dynamically change the row style or the template or the individual cells (via cells object).

```js
function onRow(row){

    const {data, cells} = row;

    // dynamic row style
    if (data.country == 'France'){
        row.class = 'bg-green';
    }

    // dynamic cell styles
    if (data.city == 'London'){
        cells.address = {class: 'circle'};
    }

    if (data.contactTitle == 'Owner'){
        cells.contact = {class: 'star'};
    }
}
```

### Calculated values

You can also create new columns with dynamic/calculated data - just assign the value 
(or complete cell context, including template, style etc.) to the cells object matching the key (or field) in the column descriptor.

```js

const columns = [
    // ...
    { header: 'Last Order', type: 'money', field: 'amount' },
    { header: 'Order Date', type: 'date', field: 'date' }
];


function onRow(row){

    const {data, cells} = row;

    // calculated values
    cells.amount = 2000 * Math.random();
    cells.date = Date.now() - 500 * 86400000 * Math.random();
}
```

### Rendering outside of cell/row boundaries

The row and cell templates can have style overflow: visible - that allows doing many things beyond traditional datagrid capabilities,
like popups, overlays, gantt charts, schedulers etc.


Read more:

- [Get started](https://docs.activewidgets.com/guide/starting/svelte/)
- [API](https://docs.activewidgets.com/api/)