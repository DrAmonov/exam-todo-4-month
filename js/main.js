const form = document.querySelector('.form');
const input = document.querySelector('.inp');
const list = document.querySelector('.list');
const logout = document.querySelector('.logout')

const localData = localStorage.getItem('token');

if (!localData) {
	location.replace('login.html');
}

logout.addEventListener('click', function () {
  localStorage.removeItem('token')
  location.reload()
})

const renderTodo = (array, node) => {
	node.innerHTML = '';
	array.allTodos.forEach((todo) => {
		node.innerHTML += `
    <li class="d-flex align-items-center mt-3">
    <input class="form-check-input me-3 chechbox" type="checkbox" data-todo-id=${
			todo._id
		} ${todo.completed ? 'checked' : ''}>
    <span class="flex-grow-1" style="${
			todo.completed ? 'text-decoration: line-through ' : ''
		};">${todo.task}</span>
    <button class="btn btn-success me-2 edit-btn" data-todo-id=${
			todo._id
		}>EDIT</button>
    <button class="btn btn-danger delete-btn" data-todo-id=${
			todo._id
		}>DELETE</button>
  </li>`;
	});
};

async function getTodos() {
	const res = await fetch('https://todo-for-n92.cyclic.app/todos/all', {
		headers: {
			'x-access-token': localData,
		},
	});
	const data = await res.json();
	console.log(data);
	renderTodo(data, list);
}

getTodos();

form.addEventListener('submit', function (evt) {
	evt.preventDefault();
	fetch('https://todo-for-n92.cyclic.app/todos/add', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'x-access-token': localData,
		},
		body: JSON.stringify({
			task: input.value,
		}),
	})
		.then((res) => res.json())
		.then((data) => {
			if (data) {
				getTodos();
			}
		})
		.catch((err) => console.log(err));
	input.value = '';
});

const deleteTodo = (id) => {
	fetch(`https://todo-for-n92.cyclic.app/todos/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			'x-access-token': localData,
		},
	})
		.then((res) => res.json())
		.then((data) => {
			if (data) {
				getTodos();
			}
		})
		.catch((err) => console.log(err));
};

const editTodo = (id) => {
	const newValue = prompt('Yangi todoni kiriting:');
	fetch(`https://todo-for-n92.cyclic.app/todos/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			'x-access-token': localData,
		},
		body: JSON.stringify({ task: newValue }),
	})
		.then((res) => res.json())
		.then((data) => {
			if (data) {
				getTodos();
			}
		})
		.catch((err) => console.log(err));
};

const isCompleted = (id) => {
	fetch(`https://todo-for-n92.cyclic.app/todos?id=${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			'x-access-token': localData,
		},
		body: JSON.stringify({ task: 'Update task' }),
	})
		.then((res) => res.json())
		.then((data) => {
			if (data) {
				getTodos();
			}
		})
		.catch((err) => console.log(err));
};

list.addEventListener('click', function (evt) {
	if (evt.target.matches('.delete-btn')) {
		const btnId = evt.target.dataset.todoId;
		deleteTodo(btnId);
	}
	if (evt.target.matches('.edit-btn')) {
		const btnId = evt.target.dataset.todoId;
		editTodo(btnId);
	}
	if (evt.target.matches('.chechbox')) {
		const todoId = evt.target.dataset.todoId;
		isCompleted(todoId);
	}
});
