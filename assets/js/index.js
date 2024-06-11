/*index .js code*/
let form = document.getElementById("container");
let userInput = document.getElementById("input-item");

function addNewItem() {
    let itemText = userInput.value;
    if (itemText == "") {
        console.log("Item is empty");
    } else {
        console.log(itemText);
        form.insertAdjacentHTML("beforeend", `<div class="list-item"><label><input type="checkbox">${itemText}</label></div>`);
        userInput.value = "";
    }
}

/*index2 .js code*/

function addingItemFunc() {
    let li = document.createElement("li");
    let newShoppingItem = document.getElementById("shoppingInput");
    let textnode = document.createTextNode(newShoppingItem.value);
    li.appendChild(textnode);
    document.getElementById("listItems").appendChild(li);
    document.getElementById("shoppingInput").value = "";
}
