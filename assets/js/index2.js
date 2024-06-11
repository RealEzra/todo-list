/*index2 .js code*/

function addingItemFunc() {
    let li = document.createElement("li");//create list
    let checkbox = document.createElement("input");//create input
    checkbox.type = "checkbox";//make input a checkbox input
    let newShoppingItem = document.getElementById("shoppingInput");//user input
    let span = document.createElement("span");//create span
    span.textContent = newShoppingItem.value;//make span text have user input
    li.appendChild(checkbox);//add a new checkbox to a list
    li.appendChild(span);//add the user input to a list
    document.getElementById("listItems").appendChild(li);//grab the ul and add the new li to the end
    document.getElementById("shoppingInput").value = "";//replace user input with blank
    
    //event Listener for the checkbox, helps run line-through on new items added
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            //span.style.textDecoration = "line-through";
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
