const sqlite3 = require('sqlite3').verbose();


let db = new sqlite3.Database('./mydb.sqlite3', (err) => {
  if (err) {
    console.error('Грешка при отваряне на базата данни', err.message);
  } else {
    console.log('Успешно свързване с базата данни.');
  }
});


db.run(`CREATE TABLE IF NOT EXISTS contacts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE
)`, (err) => {
  if (err) {
    console.error('Грешка при създаването на таблицата', err.message);
  } else {
    console.log('Таблицата е успешно създадена или вече съществува.');
  }
});


db.close((err) => {
  if (err) {
    console.error('Грешка при затварянето на връзката с базата данни', err.message);
  } else {
    console.log('Връзката с базата данни е затворена.');
  }
});