const express = require('express');
const cors = require('cors');

const PORT = 5000;
const app = express();

const users = [{ name: 'Jonas' }, { name: 'Tomas' }, { name: 'Erika' }];

app.use(express.json());
app.use(cors());

app.get('/', (_, res) => {
	res.send('Sveiki!');
});

// localhost:5000/date?locale=lt-LT    => 2022-11-09 19:44:53
app.get('/date', (req, res) => {
	const locale = req.query.locale || 'en-US';
	// const { locale } = req.query;

	const formattedDate = new Date().toLocaleString(locale);

	res.send(formattedDate);
});

app.post('/', (req, res) => {
	const age = req.body.age || 5; // naudok req.body.age. jei neegzistuoja - naudok 5

	// jei `age` yra truthy reiksme (ne 0, ne null, ne undefined, ne '', ...)
	// const providedAge = age ? age : 0;

	res.send({ ageTimesTwo: age * 2 });
});

// localhost:5000/jonas-152 grąžins { userName: 'jonas-152' }
app.get('/:userName', (req, res) => {
	const { userName } = req.params;
	// const userName = req.params.userName;

	const user = users.find((curUser) => curUser.name.toLocaleLowerCase() === userName.toLocaleLowerCase().trim());

	res.send(user ?? { info: 'User not found' });
});

app.listen(PORT);
