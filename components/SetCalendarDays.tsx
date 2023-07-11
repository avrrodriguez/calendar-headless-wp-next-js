import { useEffect } from "react"
import GetCalendarMonthDays from "helpers/GetCalendarMonthDays"
import { dateDateIdAndEvents } from "types/graphql/graphql"

export function SetCalendarDays({month, year, calendarDayElementId, calendarCellNumber}: dateDateIdAndEvents): JSX.Element {
  const date: Date = new Date(`${month} 1, ${year}`)
  const startMonthDay: number = date.getDay()
  var endMonthDay = GetCalendarMonthDays(`${month}`)
  var calendarDayNumber = calendarCellNumber - startMonthDay
  
  function displayDay() {
    const col: number = parseInt(calendarDayElementId.slice(4, 5))
    const row: number = parseInt(calendarDayElementId.slice(10, 11))

    const calendarDay = document.getElementById(`col-${col}-row-${row}`)
  
    if (((row >= startMonthDay && col == 0) || col > 0) && (calendarDayNumber <= endMonthDay)) {
      calendarDay.innerText = calendarDayNumber.toString()
      calendarDay.style.backgroundColor = "white"
    } else {
      calendarDay.textContent = ""
      calendarDay.style.backgroundColor = "gray"
    }
  }
  useEffect(() => {displayDay()}, [month])

  return (
    <div></div>
  )
}

