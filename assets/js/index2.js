/*index2 .js code*/

function addingItemFunc() {
    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    let newShoppingItem = document.getElementById("shoppingInput");
    let span = document.createElement("span");
    span.textContent = newShoppingItem.value;
    li.appendChild(checkbox);
    li.appendChild(span);
    document.getElementById("listItems").appendChild(li);
    document.getElementById("shoppingInput").value = "";
    
    //event Listener for the checkbox
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            span.style.textDecoration = "line-through";
            span.style.textDecoration.color = "red";
        } else {
            span.style.textDecoration = "none";
        }
    });
    // let li = document.createElement("li");
    // let checkbox = document.createElement("input")
    // checkbox.type = "checkbox";
    // let newShoppingItem = document.getElementById("shoppingInput");
    // let textnode = document.createTextNode(newShoppingItem.value);
    // li.appendChild(checkbox);
    // li.appendChild(textnode);
    // document.getElementById("listItems").appendChild(li);
    // document.getElementById("shoppingInput").value = "";

    // checkbox.addEventListener('change', function() {
    //     if(this.checked) {
    //         span
    //     }
    // })
}
