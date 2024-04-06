// document.write("hii");
// let p= fetch('country.json')
// p.then((value1)=>{
//     console.log(value1);
//     console.log(value1.status)
//     console.log(value1.ok)
//     return value1.json();
// })
// .then((value2)=>{
//     console.log(value2);
//     value2.forEach(elemet => {
//         const vari=  `<li>${elemet.country_id}</li>`;
//         document.querySelector("ul").insertAdjacentHTML("beforeend",vari);
//     });
// })
// .catch(error => console.log(error));

let inputItems = [];

        document.getElementById("groceryForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent default form submission
            const input = document.getElementById("groceryInput").value;
            if (input.trim() !== "") {
                // Store input in array
                inputItems.push(input);
                // Display input items
                displayInput(input);
                // Clear input field
                document.getElementById("groceryInput").value = "";
            }
        });

        function displayInput(input) {
            const groceryList = document.getElementById("groceryList");
            const listItem = document.createElement("li");
            listItem.textContent = input;
            // Create a delete button
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.classList.add("delete-btn");
            // Add event listener to delete button
            deleteBtn.addEventListener("click", function() {
                // Remove the item from the array
                const index = inputItems.indexOf(input);
                if (index !== -1) {
                    inputItems.splice(index, 1);
                }
                // Remove the list item from the DOM
                listItem.remove();
            });
            // Append the delete button to the list item
            listItem.appendChild(deleteBtn);
            // Append the list item to the grocery list
            groceryList.appendChild(listItem);
        }

        // View input items on click of "View Items" button
        document.getElementById("viewItemsBtn").addEventListener("click", function() {
            const groceryList = document.getElementById("groceryList");
            // Clear previous items
            groceryList.innerHTML = "";
            // Display input items
            inputItems.forEach(function(item) {
                displayInput(item);
            });
        });