/**
 * Copyright (c) ActiveWidgets SARL. All Rights Reserved.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { tpl } from "@activewidgets/html";
import * as flags from '@activewidgets/examples/flags';


export function company({data}){
    return tpl`<div>
        <div class="bold blue">${data.customerID}</div>
        <div class="small">${data.companyName}</div>
    </div>`;
}

export function contact({data}){
    return tpl`<div>
        <div class="bold">${data.contactName}</div>
        <div class="small">${data.contactTitle}</div>
    </div>`;
}

export function address({data}){
    return tpl`<div>
        <div class="small">${data.address}</div>
        <div class="small">${data.postalCode} <span>${data.city}</span></div>
    </div>`;
}

export function country({text}){
    return tpl`<div><img src=${flags[text]}/>${text}</div>`;
}

export function phone({data}){
    return tpl`<div>
        <div class="small phone">${data.phone}</div>
        <div class="small fax">${data.fax}</div>
    </div>`;
}
