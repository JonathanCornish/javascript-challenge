let table_data = data;
let tbody = d3.select('tbody');

function createTable(data) {
    tbody.html("");
    data.forEach((datarow) => {
        let row = tbody.append('tr');
        Object.values(datarow).forEach((val) => {
            let cells = row.append('td');
            cells.text(val);
        });
    });
}

let button_info = document.getElementById('filter-btn');
button_info.addEventListener('click', function(){
    // console.log("i clicked")
    let date = d3.select("#datetime").property("value");
    let filtered_data = table_data;
    filtered_data = filtered_data.filter(row => row.datetime == date);
    createTable(filtered_data);
})

createTable(table_data)