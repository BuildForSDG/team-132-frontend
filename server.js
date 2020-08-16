import express from 'express';

import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(process.env.PORT || 8080);

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist/index.html'));
});

console.log(`The app is running`);
