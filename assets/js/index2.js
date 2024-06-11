/*index2 .js code*/

function addingItemFunc() {
    let li = document.createElement("li");
    let newShoppingItem = document.getElementById("shoppingInput");
    let textnode = document.createTextNode(newShoppingItem.value);
    li.appendChild(textnode);
    document.getElementById("listItems").appendChild(li);
    document.getElementById("shoppingInput").value = "";


}