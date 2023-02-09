const form = document.querySelector('.form');
const username = document.querySelector('.reg-username');
const password = document.querySelector('.reg-password');

form.addEventListener('submit', (evt) => {
	evt.preventDefault();

	fetch('https://todo-for-n92.cyclic.app/user/register', {
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
			console.log(data);
			if (data.token) {
				localStorage.setItem('token', data.token);
				location.replace('index.html');
			}
		})
		.catch((err) => console.log(err));
});
