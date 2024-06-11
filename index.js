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
