const sqlite3 = require('sqlite3').verbose();


let db = new sqlite3.Database('./mydb.sqlite3', (err) => {
  if (err) {
    console.error('Грешка при отваряне на базата данни', err.message);
  } else {
    console.log('Успешно свързване с базата данни.');

    db.run(`CREATE TABLE IF NOT EXISTS contacts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE
      )`, (err) => {
        if (err) {
          console.error('Грешка при създаването на таблицата', err.message);
        } else {
          console.log('Таблицата е успешно създадена или вече съществува.');

          getAll();

        //   const insertData = `INSERT INTO contacts (name, email) VALUES (?, ?)`;
        //   db.run(insertData, ["name", "...@email.com"], (err) => {
        //     if (err) {
        //       console.error('Грешка при вмъкването на данни', err.message);
        //     } else {
        //       console.log('Данните са успешно вмъкнати.');

        //       db.close((err) => {
        //         if (err) {
        //           console.error('Грешка при затварянето на връзката с базата данни', err.message);
        //         } else {
        //           console.log('Връзката с базата данни е затворена.');
        //         }
        //       });
        //     }
        //   });
        // }
      }}
    )
  }
});






function getAll() {
  db.all("SELECT * FROM contacts", [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach((row) => {
      console.log(row.name, row.email);
    });
  });
}
  

//   db.get("SELECT * FROM contacts WHERE email = ?", [email], (err, row) => {
//     if (err) {
//       return console.error(err.message);
//     }
//     console.log(row.name, row.email);
//   });
  


//   db.each("SELECT * FROM contacts", (err, row) => {
//     if (err) {
//       throw err;
//     }
//     console.log(row.name, row.email);
//   });
  


//   db.close((err) => {
//     if (err) {
//       console.error(err.message);
//     }
//     console.log('Close the database connection.');
//   });
  
  