require('dotenv').config();
const express = require('express');
const antiHeroesRoutes = require('./routes/antiHeroesRoutes');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use('/', antiHeroesRoutes);

app.listen(PORT, () => {
    console.log(`Server ta on fml 😶 ${PORT}`);
});