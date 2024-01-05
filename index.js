const express = require('express')
const app = express()
const port = 3000

app.get('/schedule', (req, res) => {
  console.log(req.query.d, req.query.m, req.query.y);

  var updatedMonth = req.query.m-1

  var date = new Date(Date.UTC(req.query.y,updatedMonth,req.query.d))

  var dayOfWeek = date.getDay();

  var room = req.query.room;

  var schedule = findSchedule(dayOfWeek, room);

  res.send(schedule);
})

app.get('/timer', (req, res) => {
    res.send({
        contdown:"min"
    })
})
app.get('/global time', (req, res) => {
    res.send({
        liveclock: "huors and mins"
    })
  });

  app.get('/schedule.Monday.11A', (req,res) => {
    res.send(
      {
        "date":start1,
        "room": "11",
        "1": {"start_time": start1, "end_time": start1, "techer":"Георги Густинов", "subject":"Обектно орентиране"},
        "2": {"start_time":start1, "end_time": start1,"techer":"Георги Густинов", "subject":"Обектно орентиране"},
        "3": {"start_time":start1, "end_time": start1, "techer":"Георги Густинов","subject":"Конкурентно програмиране"},
        "4": {"start_time":start1, "end_time": start1, "techer":"Георги Густинов","subject":"Конкурентно програмиране - УП"},
        "5": {"start_time":start1, "end_time": start1, "techer":"Георги Густинов","subject":"Обектно орентиране-УП"},
        "6": {"start_time":start1, "end_time": start1, "techer":"Георги Густинов","subject":"Обектно орентиране-УП"}
      }
    )
  })

  app.get('/schedule.Tuesday.11A', (req,res) => {
    res.send(
      {
        "date":start1,
        "room": "11",
        "1": {"start_time": start1, "end_time": start1, "techer":"Георги Густинов", "subject":"Вградени системи"},
        "2": {"start_time":start1, "end_time": start1,"techer":"Гинка Попова", "subject":"БЕЛ"},
        "3": {"start_time":start1, "end_time": start1, "techer":"Мариана Димитрова-Естатиева","subject":"РЕ"},
        "4": {"start_time":start1, "end_time": start1, "techer":"Георги Густинов","subject":"Вградени системи-УП"},
        "5": {"start_time":start1, "end_time": start1, "techer":"Георги Густинов","subject":"Мат.основи на програмирането"},
        "6": {"start_time":start1, "end_time": start1, "techer":"Георги Густинов","subject":"Мат.основи на програмирането-УП"},
        "7": {"start_time":start1, "end_time": start1, "techer":"Йордан Раднев","subject":"ЧК"}
      }
    )
  })

  app.get('/schedule.Wednesday.11A', (req,res) => {
    res.send(
      {
        "date":start1,
        "room": "11",
        "1": {"start_time": start1, "end_time": start1, "techer":"Георги Густинов", "subject":"РПП бази данни"},
        "2": {"start_time":start1, "end_time": start1,"techer":"Георги Густинов", "subject":"РПП бази данни"},
        "3": {"start_time":start1, "end_time": start1, "techer":"Мария Терзиева","subject":"Математика"},
        "4": {"start_time":start1, "end_time": start1, "techer":"Гинка Попова","subject":"БЕЛ"},
        "5": {"start_time":start1, "end_time": start1, "techer":"Гинка Попова","subject":"БЕЛ"},
        "7": {"start_time":start1, "end_time": start1, "techer":"Георги Густинов","subject":"Бази данни"}
      }
    )
  })
  
  app.get('/schedule.Thursday.11A', (req,res) => {
    res.send(
      {
        "date":start1,
        "room": "11",
        "1": {"start_time": start1, "end_time": start1, "techer":"Мариана Димитрова-Естатиева", "subject":"PE"},
        "2": {"start_time":start1, "end_time": start1,"techer":"Нешо Нешев", "subject":"Разработване на софтуер"},
        "3": {"start_time":start1, "end_time": start1, "techer":"Нешо Нешев","subject":"Разработване на софтуер-УП"},
        "4": {"start_time":start1, "end_time": start1, "techer":"Мария Терзиева","subject":"Математика"},
        "5": {"start_time":start1, "end_time": start1, "techer":"Лилия Думбалакова","subject":'ФВС'},
        "6": {"start_time":start1, "end_time": start1, "techer":"Нешо Нешев","subject":"Чужд език по професията-AE"},
        "7": {"start_time":start1, "end_time": start1, "techer":"Лилия Думбалакова","subject":"ДЧСД"}
      }
    )
  })

  app.get('/schedule.Friday.11A', (req,res) => {
    res.send(
      {
        "date":start1,
        "room": "11",
        "2": {"start_time":start1, "end_time": start1,"techer":"Нешо Нешев", "subject":"Разработване на софтуер"},
        "3": {"start_time":start1, "end_time": start1, "techer":"Нешо Нешев","subject":"Разработване на софтуер-УП"},
        "4": {"start_time":start1, "end_time": start1, "techer":"Йордан Раднев","subject":"Граждаско образованиве"},
        "5": {"start_time":start1, "end_time": start1, "techer":"Лилия Думбалакова","subject":'ФВС'},
        "6": {"start_time":start1, "end_time": start1, "techer":"Нешо Нешев","subject":"Чужд език по професията-AE"},
        "7": {"start_time":start1, "end_time": start1, "techer":"Атанас Костов","subject":"ОС"},
        "7": {"start_time":start1, "end_time": start1, "techer":"Атанас Костов","subject":"ОС-УП"}
      }
    )
  })

  


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})