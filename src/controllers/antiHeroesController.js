const pool = require('../config/dbConfig');

async function getAllAnti_Heroes(req, res) {
    try {
        const result = await pool.query('SELECT * FROM anti_heroes');

        if (result.rowCount == 0) {
            res.status(500).json({
                status: 'null',
                message: 'Nenhum anti-heroi encontrado',
                total: result.rowCount,
            })
        }

        res.json({
            status: 'success',
            message: 'Lista de anti-herois',
            total: result.rowCount,
            data: result.rows,
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message,
        });
    }
};

async function getAnti_HeroById(req, res) {
    try {
        const { id } = req.params;

        const result = await pool.query('SELECT * FROM anti_heroes WHERE id = $1', [id]);

        if (result.rowCount == 0) {
            res.status(500).json({
                status: 'null',
                message: 'Heroi não encontrado',
                total: result.rowCount,
            })
        }

        res.json({
            status: 'success',
            message: 'Anti-Heroi encontrado',
            total: result.rowCount,
            data: result.rows,
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message,
        });
    }
};

async function getAnti_HeroByName(req, res) {
    try {
        const { name } = req.params;

        const result = await pool.query('SELECT * FROM anti_heroes WHERE LOWER(name) LIKE $1', [`%${name.toLocaleLowerCase()}%`]);

        if (result.rowCount == 0) {
            res.status(500).json({
                status: 'null',
                message: 'Anti-Heroi não encontrado',
                total: result.rowCount,
            })
        }

        res.json({
            status: 'success',
            message: 'Anti-Heroi encontrado',
            total: result.rowCount,
            data: result.rows,
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message,
        });
    }
};

async function postAnti_Hero(req, res) {
    try {
        const { name, power, experience, lvl, health, attack } = req.body;

        const result = await pool.query('INSERT INTO anti_heroes (name, power, experience, lvl, health, attack) VALUES ($1, $2, $3, $4, $5, $6)', [name, power, experience, lvl, health, attack]);

        res.json({
            status: 'success',
            message: 'Anti-Heroi adicionado com sucesso',
            data: req.body,
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message,
        });
    }
};

async function putAnti_Hero(req, res) {
    try {
        const { id } = req.params;
        const { name, power, experience, lvl, health, attack } = req.body;

        const result = await pool.query('UPDATE anti_heroes SET name = $1, power = $2, experience = $3, lvl = $4, health = $5, attack = $6 WHERE id = $7', [name, power, experience, lvl, health, attack, id]);

        res.json({
            status: 'success',
            message: 'Anti-Heroi atualizado com sucesso',
            data: req.body,
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message,
        });
    }
};

async function deleteAnti_Hero(req, res) {
    try {
        const { id } = req.params;

        const result = await pool.query('DELETE FROM anti_heroes WHERE id = $1', [id]);

        res.json({
            status: 'success',
            message: 'Anti-Heroi deletado com sucesso',
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message,
        });
    }
};

module.exports = { getAllAnti_Heroes, getAnti_HeroById, getAnti_HeroByName, postAnti_Hero, putAnti_Hero, deleteAnti_Hero};