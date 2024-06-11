/*index .js code*/
let form = document.getElementById("container");
let userInput = document.getElementById("input-item");

function addNewItem() {
    let itemText = userInput.value;
    if (itemText == "") {
        console.log("Item is empty");
    } else {
        localStorage.setItem(itemText.toString(), itemText.toString())
        console.log(itemText);
        form.insertAdjacentHTML("beforeend", `<div class="list-item"><label onclick="removeItem(event)"><input type="checkbox">${itemText}</label></div>`);
        userInput.value = "";
    }
}

function removeItem(element) {
    let itemToRemove = element.target.labels[0].innerText.toString();
    if(itemToRemove in localStorage) {
        localStorage.removeItem(itemToRemove)
    } else {
        localStorage.setItem(itemToRemove, itemToRemove)
    }
}

window.addEventListener("load", (event) => {
    for (const [key, value] of Object.entries(localStorage)) {
        form.insertAdjacentHTML("beforeend", `<div class="list-item"><label onclick="removeItem(event)"><input type="checkbox">${value}</label></div>`);
      }
  });