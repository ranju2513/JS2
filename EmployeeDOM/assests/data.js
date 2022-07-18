let employees=[{id:101, name:"rahul gandhi", salary:35000},
{id:102, name:"rina", salary:65000},
{id:103, name:"rahul", salary:55000},
{id:104, name:"gandhi", salary:25000},
{id:105, name:"rita", salary:75000}]
function display_EmployeeData() {
    let rows = ""
    for (emp of employees) {
        rows = rows + `<tr>
                        <td> ${emp.id}</td>
                        <td> ${emp.name}</td>
                        <td> ${emp.salary}</td>
                        </tr>`
    }

    document.getElementById('tbody_Data').innerHTML = rows
}