
function printtable() {
    var num = parseInt(document.getElementById("inp").value);

    var table = document.getElementById("multiplication-table");

    if (num === "") {
        alert("please enter your numner")
    }
    table.innerHTML = ""; // Clear existing table content
    for (var i = 1; i <= 10; i++) {
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        // cell1.textContent = `${num} x ${i}`;
        cell1.innerHTML = num;
        cell2.innerHTML = "X";
        cell3.innerHTML = i;
        cell4.innerHTML = "=";
        cell5.textContent = num * i;
    }


}