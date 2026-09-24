const db = require('../config/db');

exports.index = async (req, res, next) => {
    try {
        const sql = `SELECT id, title, slug, synopsis, genre, year, poster_url, status
                     FROM anime
                     ORDER BY created_at DESC, id DESC`;

        const [animeList] = await db.query(sql);

        res.render('catalog/index', {
            title: 'Daftar Anime',
            animeList,
        });
    } catch (error) {
        next(error);
    }
};
