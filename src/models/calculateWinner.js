const pool = require("../config/dbConfig")

async function calculateWinner (anti_hero1, anti_hero2) {
    const anti_hero1_power = anti_hero1.health * anti_hero1.attack;
    const anti_hero2_power = anti_hero2.health * anti_hero2.attack;

    if (anti_hero1_power > anti_hero2_power) {
        await pool.query('UPDATE anti_heroes SET experience = $1 WHERE id = $2', [anti_hero1.experience + 25, anti_hero1.id]);
        await pool.query('UPDATE anti_heroes SET experience = $1 WHERE id = $2', [anti_hero2.experience + 10, anti_hero2.id]);
        return anti_hero1;
    } else {
        await pool.query('UPDATE anti_heroes SET experience = $1 WHERE id = $2', [anti_hero1.experience + 10, anti_hero1.id]);
        await pool.query('UPDATE anti_heroes SET experience = $1 WHERE id = $2', [anti_hero2.experience + 25, anti_hero2.id]);
        return anti_hero2;
    }
}

module.exports = calculateWinner;