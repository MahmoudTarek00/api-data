const mysql = require('mysql')

const data = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "pro1"
});


// Using db.getConnection instead of pool.getConnection
data.getConnection((err, connection) => {
    console.log('connected to data success');
})

module.exports = data;