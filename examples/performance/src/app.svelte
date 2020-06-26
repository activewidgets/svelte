<!--
   Copyright (c) ActiveWidgets SARL. All Rights Reserved.
   This source code is licensed under the MIT license found in the
   LICENSE file in the root directory of this source tree.
 -->

<script>

import { Datagrid } from '@activewidgets/svelte';
import { lazy } from '@activewidgets/options';
import './styles.css';


function soda(url){

    function request(url, fn){
        return fetch(url).then(res => res.json()).then(fn);
    }

    let totals = request(url + '?$select=count(*)', data => Number(data[0].count));

    return function({offset = 0, limit = 100}){
        return totals.then(count => request(url + '?$limit=' + limit + '&$offset=' + offset, items => ({
            items,
            start: offset,
            max: count
        })));
    };
}


let rows = soda('https://data.cityofchicago.org/resource/xzkq-xp2w.json');

let columns = [
    {header: 'Name', field: 'name', width: 200, position: 'left'},
    {header: 'Department', field: 'department', width: 150},
    {header: 'Job titles', field: 'job_titles', width: 200},
    {header: 'Full or part time', field: 'full_or_part_time', width: 50, style: {textAlign: 'center'}},
    {header: 'Salary or hourly', field: 'salary_or_hourly', style: {textAlign: 'center'}},
    {header: 'Hourly rate', field: 'hourly_rate', style: {textAlign: 'right'}},
    {header: 'Typical hours', field: 'typical_hours', style: {textAlign: 'right'}},
    {header: 'Annual salary', field: 'annual_salary', type: 'money', style: {textAlign: 'right'}}
];

let options = [
    lazy()
];

</script>

<Datagrid {columns} {rows} {options}/>