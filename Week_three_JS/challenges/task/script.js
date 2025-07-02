
const form = document.getElementById('task-form ');
const inputTitle = document.getElementById('title');
const inputDescription = document.getElementById('description');
const taskContainer = document.getElementById('task-list');

let tasks = [];

form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const title = inputTitle.value.trim();
    const description = inputDescription.value.trim();
    if (title === '' || description === '') return;

    const task = {
        title,
        description,
        completed: false
    };

    await fetch('http://localhost:3000/task', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task)
    });

    inputTitle.value = '';
    inputDescription.value = '';
    fetchTasks();
});

async function fetchTasks() {
    const res = await fetch('http://localhost:3000/task');
    tasks = await res.json();
    renderTasks();
}

function renderTasks() {
    taskContainer.innerHTML = '';

    tasks.forEach((task) => {
        const div = document.createElement('div');
        div.className = 'task';

        div.innerHTML = `
    <strong>${task.title}</strong><br>
        <em>${task.description}</em>
        `;

        if (task.completed) {
            div.style.textDecoration = 'line-through';
            div.style.color = 'green';
        }

        const btnComplete = document.createElement('button');
        btnComplete.textContent = 'Mark as done';
        btnComplete.addEventListener('click', async () => {
            task.completed = true;
            await fetch(`http://localhost:3000/task/${task.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(task)
            });
            fetchTasks();
        });

        const btnDelete = document.createElement('button');
        btnDelete.textContent = 'Delete';
        btnDelete.style.marginLeft = '10px';
        btnDelete.addEventListener('click', async () => {
            await fetch(`http://localhost:3000/task/${task.id}`, {
                method: 'DELETE'
            });
            fetchTasks();
        });

        div.appendChild(btnComplete);
        div.appendChild(btnDelete);
        taskContainer.appendChild(div);
    });
}

fetchTasks();