"use strict"

window.onload = () => {
    let theButton = document.querySelector("#theButton");

    theButton.addEventListener("click", connectTheNumbers);

}
async function displayInfo() {

    let userInput = document.querySelector("#todoId").value;
    let response = await fetch("http://jsonplaceholder.typicode.com/todos/" + userInput, {});
    let data = await response.json();
    return data;

}
async function connectTheNumbers() {

    let info = await displayInfo();

    let results = document.querySelector("#results");

    let userInput = Number(document.querySelector("#todoId").value);

    if (info.id === userInput) {

        return results.innerHTML = `<p>User ID: ${info.userId}</p> <p> ID: ${info.id}</p> <p>Title: ${info.title}</p> `;

    } else {
        return results.innerHTML = "error";
    }

}