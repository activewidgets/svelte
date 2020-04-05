
[Open fullscreen](/hello-world/) | [Source on github](https://github.com/activewidgets/svelte/tree/master/examples/hello-world) | [Edit on Codesandbox](https://codesandbox.io/s/7c6i9)

This is a small example to get started with ActiveWidgets components for Svelte.

First, import the component classes:

```js
import { Datagrid } from '@activewidgets/svelte';
```

Then initialize or load the data array:

```js
let rows = [
    { message: 'Hello, World!' }
];
```

Finally, create the component and assign the data:

```html
<Datagrid {rows} />
```

Thats all! 

Read more:

 - [Get started](https://docs.activewidgets.com/guide/starting/svelte/)