import { useEffect, useState } from "react"
import GetCalendarMonthDays from "helpers/GetCalendarMonthDays"
import { dateDateIdAndEvents, EventType } from "types/graphql/graphql"
import SetEventDays from "components/SetEventDays"
import filterEvents from "helpers/filterEvents"

export function SetCalendarDays({month, year, calendarDayId, day, events}: dateDateIdAndEvents): JSX.Element {
  const date: Date = new Date(`${month} 1, ${year}`)
  const startMonthDay: number = date.getDay()
  var endMonthDay = GetCalendarMonthDays(`${month}`)

  console.log(startMonthDay, endMonthDay)
  
  function displayDay() {
    
    const col: number = parseInt(calendarDayId.slice(4, 5))
    const row: number = parseInt(calendarDayId.slice(10, 11))

    const calendarDay = document.getElementById(`col-${col}-row-${row}`)
  
    if (((row >= startMonthDay && col == 0) || col > 0) && (day - startMonthDay) <= endMonthDay) {
      var dayInCalendar = day - startMonthDay
      calendarDay.innerText = dayInCalendar.toString()
      calendarDay.style.backgroundColor = "white"
    } else {
      calendarDay.textContent = ""
      calendarDay.style.backgroundColor = "gray"
    }

    // filterEvents(month, year, events).map((calendar_post: EventType) => {
    //   SetEventDays(calendar_post)
    // })
  }
  useEffect(() => {displayDay()}, [])

  return (
    <div></div>
  )
}

