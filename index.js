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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})