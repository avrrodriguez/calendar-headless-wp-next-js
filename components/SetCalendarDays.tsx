import { useEffect } from "react"
import GetCalendarMonthDays from "helpers/GetCalendarMonthDays"

type typeOfCalendarDayd = {
  calendarDayId: String
  month: String
  year: String
}

export function SetCalendarDays({ calendarDayId, month, year }: typeOfCalendarDayd): JSX.Element {
  const date: Date = new Date(`${month} 1, ${year}`)
  const startMonthDay: Number = date.getDay()
  var endMonthDay = GetCalendarMonthDays(`${month}`)
  var day = 1
  
  function displayDay() {
    [...Array(6).keys()].map((row) => {
      [...Array(7).keys()].map((col)=>{
          if(((col >= startMonthDay && row == 0) || row > 0) && day <= endMonthDay) {
            document.getElementById(`col-${col}-row-${row}`).innerText = day.toString()
            day++
          } else {
            document.getElementById(`col-${col}-row-${row}`).style.backgroundColor = "gray"
          }
      })
    })
  }

  useEffect(() => {displayDay()})

  return (
    <div></div>
  )
}

