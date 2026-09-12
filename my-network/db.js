const Database = require('better-sqlite3');
const db = new Database('app.db');

const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: '.db'
});
db.exec("CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY, body text)");
const insert=db.prepare("INSERT into notes (body) VALUES (?)");
insert.run=("первая заметка");
const rows=db.prepare("Select id, body from notes").all();
console.log(rows);
module.exports = sequelize;
