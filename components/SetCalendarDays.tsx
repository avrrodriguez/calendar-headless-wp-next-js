import { useEffect } from "react"
import GetCalendarMonthDays from "helpers/GetCalendarMonthDays"
import { dateDateIdAndEvents } from "types/graphql/graphql"
import SetEventDays from "./SetEventDays"

export function SetCalendarDays({month, year, calendarDayElementId, calendarCellNumber, events}: dateDateIdAndEvents): JSX.Element {
  const date: Date = new Date(`${month} 1, ${year}`)
  const startMonthDay: number = date.getDay()
  const calendarDayNumber = calendarCellNumber - startMonthDay
  var endMonthDay = GetCalendarMonthDays(`${month}`)
  
  const col: number = parseInt(calendarDayElementId.slice(4, 5))
  const row: number = parseInt(calendarDayElementId.slice(10, 11))
  
  const eventsOfTheDay = events
  .filter((calendarEvent) => 
  parseInt(calendarEvent.event.eventStartDate) <= calendarDayNumber && parseInt(calendarEvent.event.eventEndDate) >= calendarDayNumber)

  const isCalendarDay: boolean = calendarDayNumber > 0 && calendarDayNumber <= endMonthDay
  const isDayOfEvent: boolean = eventsOfTheDay.length > 0

  function displayDay() {
    const calendarDay = document.getElementById(`col-${col}-row-${row}`)
    
    if (((row >= startMonthDay && col == 0) || col > 0) && (calendarDayNumber <= endMonthDay)) {
      calendarDay.style.backgroundColor = "white"
    } else {
      calendarDay.style.backgroundColor = "gray"
    }
  }

  useEffect(() => {displayDay()}, [month])

  return (
    <div style={{}}>
      {isCalendarDay ? (calendarDayNumber) : ""}
      {isDayOfEvent ? (<div><SetEventDays events={eventsOfTheDay}/></div>) : <></>}
    </div>
  )
}

