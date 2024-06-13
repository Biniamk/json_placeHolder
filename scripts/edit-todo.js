"use strict"

window.onload = () => {

    let chooseToDOtoUpdate = document.querySelector("#chooseToDoToEditForm");

    let ToDoInfo = document.querySelector("#UpdateToDoForm");


   chooseToDOtoUpdate.addEventListener("submit", populateUpdateForm);

    ToDoInfo.addEventListener("submit", updateTheToDO);

    let cancelButton = document.querySelector("#cancelButton");

}

const updateTheToDO = async (event) => {

    event.preventDefault();

    console.log(event.target);

    try {

        let response = await fetch("https://jsonplaceholder.typicode.com/todos/" + event.target.id.value,
            {
                method: "PUT",
                headers: { "Content-type": "application/json; charset=UTF-8" },
                body: JSON.stringify({
                    userid: event.target.userid.value,
                    title: event.target.title.value,
                    completed: event.target.completed.value
                })
            }
        );
        let updatedTodo = await response.json();


    } catch (err) {


        console.log("error", err)

    }

}

async function getSingletoDO (toDoID) {

    let response = await fetch("https://jsonplaceholder.typicode.com/todos/" + toDoID);
    let todo = await response.json();

    return todo;

}

async function populateUpdateForm(event){
    event.preventDefault();

    let toDos = await getSingletoDO(event.target.toDoId.value);

    document.querySelector("#userid").value = toDos.userId;
    document.querySelector("#title").value = toDos.title;
    document.querySelector("#completed").value = toDos.completed;
    document.querySelector("#id").value = toDos.id;
    

}