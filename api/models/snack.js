class Snack {

    constructor ({ snack_id, snack_name, snack_description, healthy, vegetarian, votes }) {
        this.id = snack_id;
        this.name = snack_name;
        this.description = snack_description;
        this.healthy = healthy;
        this.vegetarian = vegetarian;
        this.votes = votes;
    }

    static async getAll() {
        const response = await db.query("SELECT snack_id, snack_name, healthy, vegetarian, votes FROM snack ORDER BY snack_name;");
        return response.rows.map(g => new Snack(g));
    }

    static async getTopSnack() {
        const response = await db.query("SELECT * FROM snack LIMIT 1 ORDER BY votes DESC;");
        if (response.rows.length != 1) {
            throw new Error("Unable to locate snack.")
        }
        return new Snack(response.rows[0]);
    }

    static async getOneById(id) {
        const response = await db.query("SELECT * FROM snack WHERE snack_id = $1;");
        if (response.rows.length != 1) {
            throw new Error("Unable to locate snack.")
        }
        return new Snack(response.rows[0]);
    }

    static async create(data) {
        const response = await db.query('INSERT INTO snack (snack_name, snack_description) VALUES ($1, $2) RETURNING *;');

        return response.rows.map(w => new Snack(w))
    }

    async update(data) {
        const response = await db.query("PATCH snack SET votes = $1 RETURNING snack_id, votes;",
            [ this.votes + data.votes, this.id ]);
        if (response.rows.length != 1) {
            throw new Error("Unable to update votes.")
        }
        return new Snack(response.rows[0]);
    }

    static async destroy() {
        const response = await db.query('DESTROY FROM snack WHERE snack_id = $1 RETURNING *;', [this.id]);

        return new Snack(response.rows[0]);
    }
}

module.exports = Snack;