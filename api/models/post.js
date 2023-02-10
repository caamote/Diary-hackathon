let db = require("../database/connect");
const { post } = require("../routers/post");

class Post {

    constructor ({ post_id, post_category, post_text, post_time}) {
        this.id = post_id;
        this.category = post_category;
        this.text = post_text;
        this.time = post_time;
    }

    static async getAll() {
        const response = await db.query("SELECT * FROM post ORDER BY post_category;");
        return response.rows.map(g => new Post(g));
    }

    // static async category() {
    //     const response = await db.query("SELECT * FROM post WHERE post_category = $1;", [category]);
    //     if (response.rows.length != 1) {
    //         throw new Error("Unable to locate snack.")
    //     }
    //     return new Snack(response.rows[0]);
    // }

    // static async getOneById(id) {
    //     const response = await db.query("SELECT * FROM snack WHERE snack_id = $1;", [id]);
    //     if (response.rows.length != 1) {
    //         throw new Error("Unable to locate snack.")
    //     }
    //     return new Snack(response.rows[0]);
    // }

    // static async create(data) {
    //     let {snack_name, snack_description, healthy, vegetarian} = data; 
    //     console.log(healthy)  
    //     if(healthy === undefined){ healthy = "false"}
    //     if(vegetarian === undefined){ vegetarian = "false"}
    //     const response = await db.query("INSERT INTO snack (snack_name, snack_description, healthy, vegetarian) VALUES ($1, $2, $3, $4) RETURNING *;", [snack_name, snack_description, healthy, vegetarian]);

    //     return response.rows.map(w => new Snack(w))
    // }

    // async update(data) {
    //     const response = await db.query("UPDATE snack SET votes = $1 WHERE snack_id = $2 RETURNING snack_id, votes;",
    //         [ this.votes + data.votes, this.id ]);
    //     if (response.rows.length != 1) {
    //         throw new Error("Unable to update votes.")
    //     }
    //     return new Snack(response.rows[0]);
    // }

    // async destroy() {
    //     const response = await db.query("DELETE FROM post WHERE post_id = $1 RETURNING *;", [this.id]);

    //     return new Post(response.rows[0]);
    // }
}

module.exports = Post;
