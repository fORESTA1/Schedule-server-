const express = require('express')
const app = express()
const port = 3000

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

  app.get('/schedule.Monday', (req,res) => {
    res.send(
      {
        "date":start1,
        "room": "11",
        "1": {"start_time": start1, "end_time": start1, "techer":"Name", "subject":"Обектно орентиране"},
        "2": {"start_time":start1, "end_time": start1,"techer":"Name", "subject":"Обектно орентиране"},
        "3": {"start_time":start1, "end_time": start1, "techer":"Name","subject":"Конкурентно програмиране"},
        "4": {"start_time":start1, "end_time": start1, "techer":"Name","subject":"Конкурентно програмиране - УП"},
        "5": {"start_time":start1, "end_time": start1, "techer":"Name","subject":"Обектно орентиране-УП"},
        "6": {"start_time":start1, "end_time": start1, "techer":"Name","subject":"Обектно орентиране-УП"}
      }
    )
  })

  app.get('/schedule.Tuesday', (req,res) => {
    res.send(
      {
        "date":start1,
        "room": "11",
        "1": {"start_time": start1, "end_time": start1, "techer":"Name", "subject":"Вградени системи"},
        "2": {"start_time":start1, "end_time": start1,"techer":"Name", "subject":"БЕЛ"},
        "3": {"start_time":start1, "end_time": start1, "techer":"Name","subject":"РЕ"},
        "4": {"start_time":start1, "end_time": start1, "techer":"Name","subject":"Вградени системи-УП"},
        "5": {"start_time":start1, "end_time": start1, "techer":"Name","subject":"Мат.основи на програмирането"},
        "6": {"start_time":start1, "end_time": start1, "techer":"Name","subject":"Мат.основи на програмирането-УП"},
        "7": {"start_time":start1, "end_time": start1, "techer":"Name","subject":"ЧК"}
      }
    )
  })

  app.get('/schedule.Wednesday', (req,res) => {
    res.send(
      {
        "date":start1,
        "room": "11",
        "1": {"start_time": start1, "end_time": start1, "techer":"Name", "subject":"РПП бази данни"},
        "2": {"start_time":start1, "end_time": start1,"techer":"Name", "subject":"РПП бази данни"},
        "3": {"start_time":start1, "end_time": start1, "techer":"Name","subject":"Математика"},
        "4": {"start_time":start1, "end_time": start1, "techer":"Name","subject":"БЕЛ"},
        "5": {"start_time":start1, "end_time": start1, "techer":"Name","subject":"БЕЛ"},
        "7": {"start_time":start1, "end_time": start1, "techer":"Name","subject":"Бази данни"}
      }
    )
  })
  
  app.get('/schedule.Thursday', (req,res) => {
    res.send(
      {
        "date":start1,
        "room": "11",
        "1": {"start_time": start1, "end_time": start1, "techer":"Name", "subject":"PE"},
        "2": {"start_time":start1, "end_time": start1,"techer":"Name", "subject":"Разработване на софтуер"},
        "3": {"start_time":start1, "end_time": start1, "techer":"Name","subject":"Разработване на софтуер-УП"},
        "4": {"start_time":start1, "end_time": start1, "techer":"Name","subject":"Математика"},
        "5": {"start_time":start1, "end_time": start1, "techer":"Name","subject":'ФВС'},
        "6": {"start_time":start1, "end_time": start1, "techer":"Name","subject":"Чужд език по професията-AE"},
        "7": {"start_time":start1, "end_time": start1, "techer":"Name","subject":"ДЧСД"}
      }
    )
  })

  app.get('/schedule.Friday', (req,res) => {
    res.send(
      {
        "date":start1,
        "room": "11",
        "2": {"start_time":start1, "end_time": start1,"techer":"Name", "subject":"Разработване на софтуер"},
        "3": {"start_time":start1, "end_time": start1, "techer":"Name","subject":"Разработване на софтуер-УП"},
        "4": {"start_time":start1, "end_time": start1, "techer":"Name","subject":"Граждаско образованиве"},
        "5": {"start_time":start1, "end_time": start1, "techer":"Name","subject":'ФВС'},
        "6": {"start_time":start1, "end_time": start1, "techer":"Name","subject":"Чужд език по професията-AE"},
        "7": {"start_time":start1, "end_time": start1, "techer":"Name","subject":"ОС"},
        "7": {"start_time":start1, "end_time": start1, "techer":"Name","subject":"ОС-УП"}
      }
    )
  })

  


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})