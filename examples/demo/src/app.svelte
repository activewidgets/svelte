<script>
import { Datagrid } from '@activewidgets/svelte';
import { northwind } from '@activewidgets/examples/data';
import * as flags from '@activewidgets/examples/flags';
import options from './options';
import './styles.css';


const columns = [
    { header: 'Company', template: 'company', fixed: true },
    { header: 'Contact', template: 'contact', style: 'background:#f4f4f4', key: 'contact' },
    { header: 'Address', template: 'address', key: 'address' },
    { header: 'Country', type: 'country flag', field: 'country' },
    { header: 'Phone/Fax', type: 'phone & fax'},
    { header: 'Last Order', type: 'money', field: 'amount' },
    { header: 'Order Date', type: 'date', field: 'date' }
];


const rows = northwind.customers;

function onRow(row){

    const {data, cells} = row;

    // calculated values
    cells.amount = 2000 * Math.random();
    cells.date = Date.now() - 500 * 86400000 * Math.random();


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

</script>


<Datagrid {columns} {rows} {options} {onRow}>

    <div slot="company" let:data>
        <div class="bold blue">{data.customerID}</div>
        <div class="small">{data.companyName}</div>
    </div>

    <div slot="contact" let:data>
        <div class="bold">{data.contactName}</div>
        <div class="small">{data.contactTitle}</div>
    </div>

    <div slot="address" let:data>
        <div class="small">{data.address}</div>
        <div class="small">{data.postalCode} <span>{data.city}</span></div>
    </div>

    <div slot="country" let:text>
        <img src={flags[text]} alt={text} />{text}
    </div>

    <div slot="phone" let:data>
        <div class="small phone">{data.phone}</div>
        <div class="small fax">{data.fax}</div>
    </div>

</Datagrid>