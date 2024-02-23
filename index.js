const sqlite3 = require('sqlite3').verbose();
const express = require('express')
const app = express()
const port = 3000

function findSchedule(dayOfWeek, room) {
  // load json file

  // find schedule in fiile

  // return
  const fs = require('node:fs');
  try {
    const data = fs.readFileSync('c:\\Users\\Omega\\NP\\ScheduleServer\\Schedule-server-\\schedule.json', 'utf8');
    console.log(data);

    var json = JSON.parse(data);

    if (json[room] != undefined) {
      if (json[room][dayOfWeek]) {
        return (json[room][dayOfWeek]);
      }
    }

    return {}
  } catch (err) {
    console.error(err);
    return {}
  }
}

app.get('/schedule', (req, res) => {
  console.log(req.query.d, req.query.m, req.query.y);

  var updatedMonth = req.query.m-1

  var date = new Date(Date.UTC(req.query.y,updatedMonth,req.query.d))

  var dayOfWeek = date.getDay();

  var room = req.query.room;

  var schedule = findSchedule(dayOfWeek, room);

  res.send(schedule);
})


function findScheduleDB(dayOfWeek, room) {
  let db = new sqlite3.Database('./mydb.sqlite3', (err) => {
    if (err) {
      console.error('Грешка при отваряне на базата данни', err.message);
    } else {
      console.log('Успешно свързване с базата данни.');
    }
  });
}

//   function getAll() {
//     db.all("SELECT * FROM contacts", [], (err, rows) => {
//       if (err) {
//         throw err;
//       }
//       rows.forEach((row) => {
//         console.log(row.name, row.email);
//       });
//     });
//   }
// }


// let db = new sqlite3.Database('./mydb.sqlite3', (err) => {
//   if (err) {
//     console.error('Грешка при отваряне на базата данни', err.message);
//   } else {
//     console.log('Успешно свързване с базата данни.');

//     db.run(`CREATE TABLE IF NOT EXISTS contacts (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         name TEXT NOT NULL,
//         email TEXT NOT NULL UNIQUE
//       )`, (err) => {
//         if (err) {
//           console.error('Грешка при създаването на таблицата', err.message);
//         } else {
//           console.log('Таблицата е успешно създадена или вече съществува.');

//           getAll();

//         //   const insertData = `INSERT INTO contacts (name, email) VALUES (?, ?)`;
//         //   db.run(insertData, ["name", "...@email.com"], (err) => {
//         //     if (err) {
//         //       console.error('Грешка при вмъкването на данни', err.message);
//         //     } else {
//         //       console.log('Данните са успешно вмъкнати.');

//         //       db.close((err) => {
//         //         if (err) {
//         //           console.error('Грешка при затварянето на връзката с базата данни', err.message);
//         //         } else {
//         //           console.log('Връзката с базата данни е затворена.');
//         //         }
//         //       });
//         //     }
//         //   });
//         // }
//       }}
//     )
//   }
// });

app.get('/schedule-DB', (req, res) => {
  console.log(req.query.d, req.query.m, req.query.y);

  var updatedMonth = req.query.m-1

  var date = new Date(Date.UTC(req.query.y,updatedMonth,req.query.d))

  var dayOfWeek = date.getDay();

  var room = req.query.room;

  var schedule = findScheduleDB(dayOfWeek, room);

  res.send(schedule);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
