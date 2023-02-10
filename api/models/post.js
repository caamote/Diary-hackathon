let db = require("../database/connect");


class Post {

    constructor ({ post_id, post_category, post_text, post_time}) {
        this.id = post_id;
        this.category = post_category;
        this.text = post_text;
        this.time = post_time;
    }

    static async getAll() {
        const response = await db.query("SELECT * FROM diary ORDER BY post_time;");
        return response.rows.map(g => new Post(g));
    }
    
    static async getOneById(id) {
        const response = await db.query("SELECT * FROM diary WHERE post_id = $1;", [id]);
        if (response.rows.length != 1) {
            throw new Error("Unable to locate post.")
        }
        return new Post(response.rows[0]);
    }


    static async create(data) {
        let { post_category, post_text} = data; 
       
        const response = await db.query("INSERT INTO diary (post_category, post_text) VALUES ($1, $2) RETURNING *;", [post_category, post_text]);

        return response.rows.map(p => new Post(p))
    }

static async getAllByCategory(category) {
    
    let cat = `'${category}'`
    console.log(cat)

        const response = await db.query("SELECT * FROM diary WHERE post_category Like $1;", [cat]);
        if (response.rows.length != 1) {
            throw new Error("Unable to locate category.")
        }
        return new Post(response.rows[0]);
    }
    // async update(data) {
    //     const response = await db.query("UPDATE diary SET votes = $1 WHERE snack_id = $2 RETURNING snack_id, votes;",
    //         [ this.votes + data.votes, this.id ]);
    //     if (response.rows.length != 1) {
    //         throw new Error("Unable to update votes.")
    //     }
    //     return new Snack(response.rows[0]);
    // }

    async destroy() {
        const response = await db.query("DELETE FROM post WHERE post_id = $1 RETURNING *;", [this.id]);

        return new Post(response.rows[0]);
    }
}

module.exports = Post
    
