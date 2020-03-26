
var fs = require('fs');


function read(filename){
    return String(fs.readFileSync(filename, {encoding:'utf8'}));
}

var file = 'dist/ax.css.map',
    src = JSON.parse(read(file)),
    pkg = JSON.parse(read('package.json'));

src.sources = src.sources.map(function(s){
    return '../datagrid@' + pkg.version + '/css/' + s;
});


fs.writeFileSync(file, JSON.stringify(src));