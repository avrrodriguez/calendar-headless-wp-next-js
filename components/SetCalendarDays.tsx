import { useEffect } from "react"
import GetCalendarMonthDays from "helpers/GetCalendarMonthDays"
import { datePlusEvent, EventType } from "types/graphql/graphql"
import SetEventDays from "helpers/SetEventDays"

export function SetCalendarDays({month, year, events}: datePlusEvent): JSX.Element {

  const date: Date = new Date(`${month} 1, ${year}`)
  const startMonthDay: Number = date.getDay()
  var endMonthDay = GetCalendarMonthDays(`${month}`)
  var day = 1
  
  function displayDay() {
    [...Array(6).keys()].map((row) => {
      [...Array(7).keys()].map((col)=>{
          const calendarDay = document.getElementById(`col-${col}-row-${row}`)
          if (((col >= startMonthDay && row == 0) || row > 0) && day <= endMonthDay) {
            calendarDay.innerText = day.toString()
            day++
            calendarDay.style.backgroundColor = "white"
          } else {
            calendarDay.textContent = ""
            calendarDay.style.backgroundColor = "gray"
          }
        
      })
    })

    events
    .filter((calendar_post)=>
      (parseInt(calendar_post.event.eventStartDate.slice(6, 10)) || parseInt(calendar_post.event.eventEndDate.slice(6, 10))) === year
    )
    .filter((calendar_post)=>
      (parseInt(calendar_post.event.eventStartDate.slice(3, 5)) || parseInt(calendar_post.event.eventEndDate.slice(3, 5))) === (date.getMonth() + 1)
    )
    .map((calendar_post: EventType) => {
      console.log("here 2")
      SetEventDays(calendar_post)
    })
  }

  useEffect(() => {displayDay()})

  return (
    <div></div>
  )
}

