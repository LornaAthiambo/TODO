// Selectors
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Event listener for form submission
todoForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get input value
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        // Create todo item
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');
        todoItem.innerHTML = `
            <span class="todo-text">${todoText}</span>
            <button class="delete-btn">Delete</button>
        `;

        // Append todo item to the list
        todoList.appendChild(todoItem);

        // Clear input
        todoInput.value = '';

        // Add event listener to delete button
        const deleteBtn = todoItem.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function() {
            todoItem.remove();
        });
    }
});
