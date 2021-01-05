
var tbody = d3.select('tbody');
var input = d3.select('input');
var button = d3.select('button');

showData(data);

function showData(data) {
    tbody.html('');
    data.forEach(obj => {
        var row = tbody.append('tr');
        Object.values(obj).forEach(val => {
            var cell = row.append('td');
            cell.text(val)
        });
    });
};

button.on('click', () => {
    var date = input.property('value');

    var filterData = data.filter(obj => obj.datetime == date);

    showData(filterData);
});
