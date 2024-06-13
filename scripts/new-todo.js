"use strict"
 console.log("HI")

window.onload = () => {

        const createNewToDo = document.querySelector("#createNewToDoForm");

    createNewToDo.addEventListener("submit", createAToDO);

}

async function createAToDO (event){

    event.preventDefault();

    let formData = new FormData(event.target);

    let formDataAsObject = Object.fromEntries(formData);

    try {

        let response = await fetch("https://jsonplaceholder.typicode.com/todos/",
            {
                method: "POST",
                headers: { "Content-type": "application/json; charset=UTF-8" },
                body: JSON.stringify(formDataAsObject)
            }
        );
        let newtoDO = await response.json();

        let results = document.querySelector("#results");
        results.innerHTML =`<p>You've Added a New ToDO!</p>`

    } catch (err) {


    }

}