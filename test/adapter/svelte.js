
import {render, fireEvent, wait, waitForElement} from '@testing-library/svelte';
import { Datagrid } from '@activewidgets/components';


export function mount(component, props){
    return render(Datagrid, props);
}

export {fireEvent, wait, waitForElement};