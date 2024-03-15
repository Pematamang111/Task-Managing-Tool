// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
let todo = document.querySelector('#todo-cards');
let inprogress = document.querySelector('#in-progress-cards');
let done = document.querySelector('#done-cards'); 
let deleteEl = document.querySelector('.btn-btn');
//data
const newTask = [];

// Todo: create a function to generate a unique task id
function generateTaskId() {
    const uniqueId = Math.floor(Math.random()*1000000000);
    return(uniqueId);
}

// Todo: create a function to create a task card
function createTaskCard(task) {
    
    const newCard = document.createElement('div');
    newCard.className = 'card project-card draggable my-3';
    newCard.attr('class', 'data-project-id');


    const newHead = newCard.createElement('h2');
    newHead.innerHTML = 'Add Class';
    newHead.className = 'card-header';
    newCard.appendChild(newHead);

    const body = document.createElement('body');
    newCard.appendChild(body);

    const newTitle = body.createElement('h5');
    newTitle.innerHTML = 'Title';
    newTitle.className = 'title';
    newCard.appendChild(newTitle);

    const newTitleInput = body.createElement('input');
    newCard.appendChild(newTitleInput);

    const newDescription = document.createElement('h5');
    newDescription.textContent = 'Description';
    newCard.appendChild(newDescription)
    
    const newDescriptionInput = body.createElement('input');
    newCard.appendChild(newDescriptionInput);

    const newCalender = document.createElement('h5');
    newCalender.textContent = 'Due Date';
    const newCalenderInput = document.createElement('input');
    newCalenderInput.className = 'calender';
    $( ".calender" ).datepicker();
    newCard.appendChild(newCalender);

    const newButton = body.createElement('button');
    newButton.className = 'btn-btn';
    newButton.textContent = 'Delete';
    newCard.appendChild(newButton); 

    return newCard;
   

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
   todo.textContent = " ";
   inprogress.textContent = " ";
   done.textContent = " ";
   
   for (let i = 0; i<newTask.length; i++){
      const newCard = createTaskCard(task);
      todo.appendChild(newCard);
   }



   $( function() {
    $( ".draggable" ).draggable();
  } );
}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
const cardClear = document.querySelector('.card').innerHTML = " ";
const newObject = {
title: newTitleInput.value,
description: newDescription.value,
date: newCalenderInput.value
}
localStorage.setItem('newString', JSON.stringify(newObject));
JSON.parse(localStorage.getItem('newString'));

newTask.push('newString');

const today = dayjs();
if(newObject.date > today){
    newCard.style.backgroundColor = red;
    
}else if(newObject.date < today){
    newCard.style.backgroundColor = yellow;

}else if(newObject.date === today){
    newCard.style.backgroundColor = green;
    
}

}
// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

$(deleteEl).on('click', function(){
    newCard.remove();
})

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
