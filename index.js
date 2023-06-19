document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('new-task-form');
    const taskList = document.getElementById('tasks');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const newTaskInput = document.getElementById('new-task-input');
      const taskText = newTaskInput.value.trim();
  
      if (taskText !== '') {
        const newTask = createTaskElement(taskText);
        taskList.appendChild(newTask);
        newTaskInput.value = '';
      }
    });
  
    taskList.addEventListener('click', function(event) {
      const target = event.target;
  
      if (target.classList.contains('edit')) {
        enableTaskEdit(target);
      } else if (target.classList.contains('delete')) {
        deleteTask(target);
      }
    });
  
    function createTaskElement(taskText) {
      const newTask = document.createElement('div');
      newTask.className = 'tasks';
  
      const taskContent = document.createElement('div');
      taskContent.className = 'content';
  
      const taskTextInput = document.createElement('input');
      taskTextInput.className = 'text';
      taskTextInput.value = taskText;
      taskTextInput.setAttribute('readonly', 'true');
  
      taskContent.appendChild(taskTextInput);
  
      const taskActions = document.createElement('div');
      taskActions.className = 'actions';
  
      const editButton = createButton('edit', 'Edit');
      const deleteButton = createButton('delete', 'Delete');
  
      taskActions.appendChild(editButton);
      taskActions.appendChild(deleteButton);
  
      newTask.appendChild(taskContent);
      newTask.appendChild(taskActions);
  
      return newTask;
    }
  
    function createButton(className, text) {
      const button = document.createElement('button');
      button.className = className;
      button.textContent = text;
      return button;
    }
  
    function enableTaskEdit(button) {
      const task = button.closest('.tasks');
      const taskTextInput = task.querySelector('.text');
      taskTextInput.removeAttribute('readonly');
      taskTextInput.focus();
    }
  
    function deleteTask(button) {
      const task = button.closest('.tasks');
      task.remove();
    }
  });
  
  