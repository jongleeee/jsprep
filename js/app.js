// Problem: User interaction does not provide desired results
// Solution: Add interactivity

var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first-button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasks = document.getElementById("completed-tasks"); //completed-taskss


// New Task list item
var createNewTaskElement = function (taskString) {

	// Create List Item
	var listItem = document.createElement("li");
		// input checkbox
	var checkBox = document.createElement("input");
			// label 
	var label = document.createElement("label");
			// input text
	var editInput = document.createElement("input");
			// button edit
	var editButton = document.createElement("button");
			// button delete
	var deleteButton = document.createElement("button");



	checkBox.type = "checkbox";
	editInput.type = "text";
	editButton.className = "edit";
	deleteButton.className = "delete";
	
	editButton.innerText = "Edit";
	deleteButton.innerText = "Delete";

	label.innerText = taskString;


	
	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);

	

	return listItem;

}




// Add a new task
var addTask = function () {
	console.log("Add Task...");
		// create the task with the text from #new-task;
	var listItem = createNewTaskElement(taskInput.value);
			// Each elements have to be modified and appended

	incompleteTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);
	
	taskInput.value = "";
}

// Edit an existing task
var editTask = function () {
	console.log("Edit Task....");
	// when the edit is pressed

	var listItem = this.parentNode;

	var editInput = listItem.querySelector("input[type=text]");
	var label = listItem.querySelector("label");

	var containsClass = listItem.classList.contains("editMode");


	if (containsClass) {
		// if the class of the parent is .editMode
		label.innerText = editInput.value;	
			// Switch from .editMode
			// label text becomes the input
		// else
	} else {
		editInput.value = label.innerText;
			// Switch to .editMode
			// input value becomes labels text

		// toggle .editMode on the parent
	}
	listItem.classList.toggle("editMode");
}

// Delete an existing task
var deleteTask = function () {
	console.log("Delete Task...");
	// when button pressed
		// delete item from the ul
	var listItem = this.parentNode;
	var ul = listItem.parentNode;
	
	ul.removeChild(listItem);

}

// Mark test as complete
var taskCompleted = function () {
	console.log("Complete Task...");
	// when checkbox is clicked
		// append the list to #completed-tast
	var listItem = this.parentNode;
	completedTasks.appendChild(listItem);
	bindTaskEvents(listItem, taskIncomplete);
}


// Mark test as incomplete
var taskIncomplete = function () {
	console.log("Incomplete Task...");
	// when checkbox is clicked
		// append the list to #incomplete-test
	var listItem = this.parentNode;
	incompleteTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);
}




var ajax = function ajaxFunction (){
	console.log("AJAX Processing");
}



// Set a click handler to addTask function
addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajax);


var bindTaskEvents = function (taskListItem, checkBoxEventHandler) {
						var checkBox = taskListItem.querySelector("Input[type=checkbox]");
						var editButton = taskListItem.querySelector("button.edit");
						var deleteButton = taskListItem.querySelector("button.delete");


						editButton.onclick = editTask;
						deleteButton.onclick = deleteTask;
						checkBox.onchange = checkBoxEventHandler;
					}

console.log(incompleteTasksHolder.childre);


for (var i = 0; i < incompleteTasksHolder.children.length; i++) {

	bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);

}


for (var i = 0; i < completedTasks.children.length; i++) {
	bindTaskEvents(completedTasks.children[i], taskIncomplete);
}
