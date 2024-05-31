const fs = require("fs");
const  path = require('path');
const sqlite3 = require('sqlite3').verbose();

var dbname = 'C:\\Users\\Omega\\NP\\ScheduleServer\\Schedule-server-\\schedule.db';
const db = new sqlite3.Database(dbname);


db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)");


  // db.run("INSERT INTO items (name) VALUES (?)", ["Item 1"]);

 
  // db.all("SELECT * FROM items", (err, rows) => {
  //   if (err) {
  //     console.error("Error selecting items:", err);
  //   } else {
  //     console.log("Items:");
  //     rows.forEach((row) => {
  //       console.log(row.id, row.name);
  //     });
  //   }
  // });


  // db.run("UPDATE items SET name = ? WHERE id = ?", ["Updated Item", 1]);


  // db.run("DELETE FROM items WHERE id = ?", [1]);
});


db.close((err) => {
  if (err) {
    console.error("Error closing database connection:", err);
  } else {
    console.log("Database connection closed");
  }
});