const express = require('express')
const app = express()
const port = 3000

function findSchedule(dayOfWeek, room) {
  if (dayOfWeek == 0) {
    // Sunday
    return {};
  } else if (dayOfWeek == 1) {
    // Monday
    return  {
      "room": room,
      "1": {"start_h": 8, "start_m": 0, "end_h": 8, "end_m": 45, "techer":"Георги Густинов", "subject":"Обектно орентиране"},
      "2": {"start_h": 8, "start_m": 55, "end_h": 9, "end_m": 40,"techer":"Георги Густинов", "subject":"Обектно орентиране"},
      "3": {"start_h": 9, "start_m": 50, "end_h": 10, "end_m": 35, "techer":"Георги Густинов","subject":"Конкурентно програмиране"},
      "4": {"start_h": 10, "start_m": 55, "end_h": 11, "end_m": 40, "techer":"Георги Густинов","subject":"Конкурентно програмиране - УП"},
      "5": {"start_h": 11, "start_m": 50, "end_h": 12, "end_m": 35, "techer":"Георги Густинов","subject":"Обектно орентиране-УП"},
      "6": {"start_h": 12, "start_m": 45, "end_h": 13, "end_m": 30, "techer":"Георги Густинов","subject":"Обектно орентиране-УП"}
    }
  } else if (dayOfWeek == 2) {
    // Tuesday
    return { 
      "room": room,
      "1": {"start_h": 8, "start_m": 0, "end_h": 8, "end_m": 45, "techer":"Георги Густинов", "subject":"Вградени системи"},
      "2": {"start_h": 8, "start_m": 55, "end_h": 9, "end_m": 40,"techer":"Гинка Попова", "subject":"БЕЛ"},
      "3": {"start_h": 9, "start_m": 50, "end_h": 10, "end_m": 35, "techer":"Мариана Димитрова-Естатиева","subject":"РЕ"},
      "4": {"start_h": 10, "start_m": 55, "end_h": 11, "end_m": 40, "techer":"Георги Густинов","subject":"Вградени системи-УП"},
      "5": {"start_h": 11, "start_m": 50, "end_h": 12, "end_m": 35, "techer":"Георги Густинов","subject":"Мат.основи на програмирането"},
      "6": {"start_h": 12, "start_m": 45, "end_h": 13, "end_m": 30, "techer":"Георги Густинов","subject":"Мат.основи на програмирането-УП"},
      "7": {"start_h": 13, "start_m": 40, "end_h": 14, "end_m": 25, "techer":"Йордан Раднев","subject":"ЧК"}
    }
  } else if (dayOfWeek == 3) {
    // Wednesday
    return {
      "room": room,
      "1": {"start_h": 8, "start_m": 0, "end_h": 8, "end_m": 45, "techer":"Георги Густинов", "subject":"РПП бази данни"},
      "2": {"start_h": 8, "start_m": 55, "end_h": 9, "end_m": 40,"techer":"Георги Густинов", "subject":"РПП бази данни"},
      "3": {"start_h": 9, "start_m": 50, "end_h": 10, "end_m": 35, "techer":"Мария Терзиева","subject":"Математика"},
      "4": {"start_h": 10, "start_m": 55, "end_h": 11, "end_m": 40, "techer":"Георги Густинов","subject":"Бази данни-УП"},
      "5": {"start_h": 11, "start_m": 50, "end_h": 12, "end_m": 35, "techer":"Гинка Попова","subject":"БЕЛ"},
      "6": {"start_h": 12, "start_m": 45, "end_h": 13, "end_m": 30, "techer":"Гинка Попова","subject":"БЕЛ"},
      "7": {"start_h": 13, "start_m": 40, "end_h": 14, "end_m": 25, "techer":"Георги Густинов","subject":"Бази данни"}
    }
  } else if (dayOfWeek == 4) {
    // Thursday
    return {
      "room": room,
      "1": {"start_h": 8, "start_m": 0, "end_h": 8, "end_m": 45, "techer":"Мариана Димитрова-Естатиева", "subject":"PE"},
      "2": {"start_h": 8, "start_m": 55, "end_h": 9, "end_m": 40,"techer":"Нешо Нешев", "subject":"Разработване на софтуер"},
      "3": {"start_h": 9, "start_m": 50, "end_h": 10, "end_m": 35, "techer":"Нешо Нешев","subject":"Разработване на софтуер-УП"},
      "4": {"start_h": 10, "start_m": 55, "end_h": 11, "end_m": 40, "techer":"Мария Терзиева","subject":"Математика"},
      "5": {"start_h": 11, "start_m": 50, "end_h": 12, "end_m": 35, "techer":"Лилия Думбалакова","subject":'ФВС'},
      "6": {"start_h": 12, "start_m": 45, "end_h": 13, "end_m": 30, "techer":"Нешо Нешев","subject":"Чужд език по професията-AE"},
      "7": {"start_h": 13, "start_m": 40, "end_h": 14, "end_m": 25, "techer":"Лилия Думбалакова","subject":"ДЧСД"}
    }
  } else if (dayOfWeek == 5) {
    // Friday
    return {
      "room": room,
      "2": {"start_h": 8, "start_m": 0, "end_h": 8, "end_m": 45,"techer":"Нешо Нешев", "subject":"Разработване на софтуер"},
      "3": {"start_h": 8, "start_m": 55, "end_h": 9, "end_m": 40, "techer":"Нешо Нешев","subject":"Разработване на софтуер-УП"},
      "4": {"start_h": 9, "start_m": 50, "end_h": 10, "end_m": 35, "techer":"Йордан Раднев","subject":"Граждаско образованиве"},
      "5": {"start_h": 10, "start_m": 55, "end_h": 11, "end_m": 40, "techer":"Лилия Думбалакова","subject":'ФВС'},
      "6": {"start_h": 11, "start_m": 50, "end_h": 12, "end_m": 35, "techer":"Нешо Нешев","subject":"Чужд език по професията-AE"},
      "7": {"start_h": 12, "start_m": 45, "end_h": 13, "end_m": 30, "techer":"Атанас Костов","subject":"ОС"},
      "7": {"start_h": 13, "start_m": 40, "end_h": 14, "end_m": 25, "techer":"Атанас Костов","subject":"ОС-УП"}
    }
  } else if (dayOfWeek == 6) {
    // Saturday
    return {};
  } else {
    // Unknown
    return {
      "err": "Unknown day of the week"
    }
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
        "room": room,
        "1": {"start_h": 8, "start_m": 0, "end_h": 8, "end_m": 45, "techer":"Георги Густинов", "subject":"Обектно орентиране"},
        "2": {"start_h": 8, "start_m": 55, "end_h": 9, "end_m": 40,"techer":"Георги Густинов", "subject":"Обектно орентиране"},
        "3": {"start_h": 9, "start_m": 50, "end_h": 10, "end_m": 35, "techer":"Георги Густинов","subject":"Конкурентно програмиране"},
        "4": {"start_h": 10, "start_m": 55, "end_h": 11, "end_m": 40, "techer":"Георги Густинов","subject":"Конкурентно програмиране - УП"},
        "5": {"start_h": 11, "start_m": 50, "end_h": 12, "end_m": 35, "techer":"Георги Густинов","subject":"Обектно орентиране-УП"},
        "6": {"start_h": 12, "start_m": 45, "end_h": 13, "end_m": 30, "techer":"Георги Густинов","subject":"Обектно орентиране-УП"}
      }
    )
  })

  app.get('/schedule.Tuesday.11A', (req,res) => {
    res.send(
      {
        "room": room,
      "1": {"start_h": 8, "start_m": 0, "end_h": 8, "end_m": 45, "techer":"Георги Густинов", "subject":"Вградени системи"},
      "2": {"start_h": 8, "start_m": 55, "end_h": 9, "end_m": 40,"techer":"Гинка Попова", "subject":"БЕЛ"},
      "3": {"start_h": 9, "start_m": 50, "end_h": 10, "end_m": 35, "techer":"Мариана Димитрова-Естатиева","subject":"РЕ"},
      "4": {"start_h": 10, "start_m": 55, "end_h": 11, "end_m": 40, "techer":"Георги Густинов","subject":"Вградени системи-УП"},
      "5": {"start_h": 11, "start_m": 50, "end_h": 12, "end_m": 35, "techer":"Георги Густинов","subject":"Мат.основи на програмирането"},
      "6": {"start_h": 12, "start_m": 45, "end_h": 13, "end_m": 30, "techer":"Георги Густинов","subject":"Мат.основи на програмирането-УП"},
      "7": {"start_h": 13, "start_m": 40, "end_h": 14, "end_m": 25, "techer":"Йордан Раднев","subject":"ЧК"}
      }
    )
  })

  app.get('/schedule.Wednesday.11A', (req,res) => {
    res.send(
      {
        "room": room,
      "1": {"start_h": 8, "start_m": 0, "end_h": 8, "end_m": 45, "techer":"Георги Густинов", "subject":"РПП бази данни"},
      "2": {"start_h": 8, "start_m": 55, "end_h": 9, "end_m": 40,"techer":"Георги Густинов", "subject":"РПП бази данни"},
      "3": {"start_h": 9, "start_m": 50, "end_h": 10, "end_m": 35, "techer":"Мария Терзиева","subject":"Математика"},
      "4": {"start_h": 10, "start_m": 55, "end_h": 11, "end_m": 40, "techer":"Георги Густинов","subject":"Бази данни-УП"},
      "5": {"start_h": 11, "start_m": 50, "end_h": 12, "end_m": 35, "techer":"Гинка Попова","subject":"БЕЛ"},
      "6": {"start_h": 12, "start_m": 45, "end_h": 13, "end_m": 30, "techer":"Гинка Попова","subject":"БЕЛ"},
      "7": {"start_h": 13, "start_m": 40, "end_h": 14, "end_m": 25, "techer":"Георги Густинов","subject":"Бази данни"}
      }
    )
  })
  
  app.get('/schedule.Thursday.11A', (req,res) => {
    res.send(
      {
        "room": room,
      "1": {"start_h": 8, "start_m": 0, "end_h": 8, "end_m": 45, "techer":"Мариана Димитрова-Естатиева", "subject":"PE"},
      "2": {"start_h": 8, "start_m": 55, "end_h": 9, "end_m": 40,"techer":"Нешо Нешев", "subject":"Разработване на софтуер"},
      "3": {"start_h": 9, "start_m": 50, "end_h": 10, "end_m": 35, "techer":"Нешо Нешев","subject":"Разработване на софтуер-УП"},
      "4": {"start_h": 10, "start_m": 55, "end_h": 11, "end_m": 40, "techer":"Мария Терзиева","subject":"Математика"},
      "5": {"start_h": 11, "start_m": 50, "end_h": 12, "end_m": 35, "techer":"Лилия Думбалакова","subject":'ФВС'},
      "6": {"start_h": 12, "start_m": 45, "end_h": 13, "end_m": 30, "techer":"Нешо Нешев","subject":"Чужд език по професията-AE"},
      "7": {"start_h": 13, "start_m": 40, "end_h": 14, "end_m": 25, "techer":"Лилия Думбалакова","subject":"ДЧСД"}
      }
    )
  })

  app.get('/schedule.Friday.11A', (req,res) => {
    res.send(
      {
        "room": room,
      "2": {"start_h": 8, "start_m": 0, "end_h": 8, "end_m": 45,"techer":"Нешо Нешев", "subject":"Разработване на софтуер"},
      "3": {"start_h": 8, "start_m": 55, "end_h": 9, "end_m": 40, "techer":"Нешо Нешев","subject":"Разработване на софтуер-УП"},
      "4": {"start_h": 9, "start_m": 50, "end_h": 10, "end_m": 35, "techer":"Йордан Раднев","subject":"Граждаско образованиве"},
      "5": {"start_h": 10, "start_m": 55, "end_h": 11, "end_m": 40, "techer":"Лилия Думбалакова","subject":'ФВС'},
      "6": {"start_h": 11, "start_m": 50, "end_h": 12, "end_m": 35, "techer":"Нешо Нешев","subject":"Чужд език по професията-AE"},
      "7": {"start_h": 12, "start_m": 45, "end_h": 13, "end_m": 30, "techer":"Атанас Костов","subject":"ОС"},
      "7": {"start_h": 13, "start_m": 40, "end_h": 14, "end_m": 25, "techer":"Атанас Костов","subject":"ОС-УП"}
      }
    )
  })

  


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})