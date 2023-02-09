const form = document.querySelector('.form');
const username = document.querySelector('.log-email');
const password = document.querySelector('.log-password');


form.addEventListener('submit', (evt) => {
	evt.preventDefault();

	fetch('https://todo-for-n92.cyclic.app/user/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			username: username.value,
			password: password.value,
		}),
	})
		.then((res) => res.json())
		.then((data) => {
			if (data.token) {
				localStorage.setItem('token', data.token);
				location.replace('index.html');
			}
		})
		.catch((err) => console.log(err));
});
