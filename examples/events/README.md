
[Open fullscreen](/events/) | [Source on github](https://github.com/activewidgets/svelte/tree/master/examples/events) | [Edit on Codesandbox](https://codesandbox.io/s/cdy4k)

The datagrid emits composite [mouse](https://docs.activewidgets.com/api/datagrid/mouse-event/) event 
which makes it easier to find the elements affected by the user action -

```html
<script>
// ...

function onMouse({row}){
    alert(`row ${row.key} clicked!`);
}

</script>

<Datagrid {columns} {rows} on:mouse={e => onMouse(e.detail)} />
```

Please note that you have to use `event.detail` property to access the event data.

Read more:

- [Svelte Datagrid - Get started](https://docs.activewidgets.com/guide/env/svelte/#user-events)
- [API - mouse event](https://docs.activewidgets.com/api/datagrid/mouse-event/)