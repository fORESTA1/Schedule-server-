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
        console.log('Таблицата contacts е успешно създадена или вече съществува.'); 
        
        
        db.run(`CREATE TABLE IF NOT EXISTS phones ( 
          id INTEGER PRIMARY KEY AUTOINCREMENT, 
          contact_id INTEGER, 
          phone TEXT NOT NULL 
        )`, (err) => { 
          if (err) { 
            console.error('Грешка при създаването на таблицата phones', err.message); 
          } else { 
            console.log('Таблицата phones е успешно създадена или вече съществува.'); 

            db.run(`INSERT INTO contacts (name, email) VALUES (?, ?)`, ["name", "abc@email.com"], (err) => {
              if (err) {
                console.error('Грешка при вмъкването на данни', err.message);
              } else {
                console.log('Данните са успешно вмъкнати.');
    
                db.run(`INSERT INTO phones (contact_id, phone) VALUES (?, ?)`, [1, "+359435345345"], (err) => {
                  if (err) {
                    console.error('Грешка при вмъкването на данни', err.message);
                  } else {
                    console.log('Данните са успешно вмъкнати.');
    
                    db.run(`INSERT INTO phones (contact_id, phone) VALUES (?, ?)`, [2, "+134534554645"], (err) => {
                      if (err) {
                        console.error('Грешка при вмъкването на данни', err.message);
                      } else {
                        console.log('Данните са успешно вмъкнати.');
    
                        db.all("SELECT * FROM phones left join contacts ON contacts.id = phones.contact_id", [], (err, rows) => {
                          if (err) {
                            throw err;
                          }
                          rows.forEach((row) => {
                            console.log(row.name, row.email, row.phone);
                          });
                  
                          db.close((err) => {
                            if (err) {
                              console.error('Грешка при затварянето на връзката с базата данни', err.message);
                            } else {
                              console.log('Връзката с базата данни е затворена.');
                            }
                          });  
                        });
                      }
                    });
                  }
                });
              }
            });
          }
        }); 

      } 
    }); 
  } 
});
