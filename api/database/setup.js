const fs = require('fs');

const sql = fs.readFileSync('./database/setup.sql').toString();

db.query(sql)
    .then(data => console.log("Set-up complete."))
    .catch(error => console.log(error));