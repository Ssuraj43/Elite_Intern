function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    const taskValue = taskInput.value.trim();
    if (taskValue === '') {
      alert('Please enter a task.');
      return;
    }  
  
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span onclick="toggleComplete(this)">${taskValue}</span>
      <button class="delete" onclick="deleteTask(this)">Delete</button>
    `;
  
    taskList.appendChild(listItem);
    taskInput.value = '';
  }
  
  function deleteTask(button) {
    const listItem = button.parentElement;
    listItem.remove();
  }
  
  function toggleComplete(taskSpan) {
    const listItem = taskSpan.parentElement;
    listItem.classList.toggle('completed');
  }
  