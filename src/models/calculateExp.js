const pool = require("../config/dbConfig")

async function calculateExp (anti_hero) {
    if (anti_hero.experience >= 100) {
        await pool.query('UPDATE anti_heroes SET lvl = $1, experience = $2 WHERE id = $3', [anti_hero.lvl + 1, 0, anti_hero.id]);
    }
}

module.exports = calculateExp;