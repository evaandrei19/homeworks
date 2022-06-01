var todosElem = document.getElementById("todos");

// Listing all resources
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => {
    console.log(json);

    for (let i = 0; i < json.length; i++) {
      var todo = json[i];

      // Create Todo <li>
      var todoElem = createTodoElem(todo);

      // Append Todo <li> to todos <ul>
      todosElem.appendChild(todoElem);
    }
  });

function createTodoElem(todo) {
  // Create Todo <li>
  var todoElem = document.createElement("li");
  todoElem.classList = "list-group-item";
  todoElem.innerHTML = todo.title;

  // Create Edit button and append it to <li>
  var editBtn = document.createElement("button");
  editBtn.classList = "btn btn-primary";
  editBtn.innerHTML = "Edit";
  todoElem.appendChild(editBtn);

  // Create Delete button and append it to <li>
  var deleteBtn = document.createElement("button");
  deleteBtn.classList = "btn btn-danger";
  deleteBtn.innerHTML = "Delete";
  todoElem.appendChild(deleteBtn);

  return todoElem;
}


