function addItem() {
    let field1 = document.getElementById("newItemText").value;
    let field2 = document.getElementById("newItemValue").value;

    let dropDown = document.getElementById("menu");

    let child = document.createElement("option");
    child.textContent = field1;
    child.setAttribute("value", field2);

    dropDown.appendChild(child);

    document.getElementById("newItemText").value = '';
    document.getElementById("newItemValue").value = '';
}