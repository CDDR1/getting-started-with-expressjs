import express from 'express';

import userRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(express.json());

// Set starting path for all the routes in the users.js file
app.use('/users', userRoutes);

// Home Page
app.get('/', (req, res) => res.send('Homepage'));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));