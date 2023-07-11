import filterEvents from "helpers/filterEvents"
import { dateDateIdAndEvents, EventType } from "types/graphql/graphql"

export default function SetEventDays({year, month, calendarCellNumber, events}: dateDateIdAndEvents): JSX.Element {

  const filteredEvents: EventType[] = filterEvents(month, year, calendarCellNumber, events)

  const eventStartDay: Number = parseInt(events[0].event.eventStartDate.slice(0, 2))
  const eventEndDay: Number = parseInt(events[0].event.eventEndDate.slice(0, 2))
  const eventTitle: String = events[0].event.eventName

  function handleEventClick(){
    window.location.href = `/calendar/${events[0].uri}`
  }

  // const setEventDays = 
  // [...Array(6).keys()].map((row) => {
  //   [...Array(7).keys()].map((col)=>{
  //     const calendarDay = document.getElementById(`col-${col}-row-${row}`)
  //     if (parseInt(calendarDay.innerText) >= eventStartDay && parseInt(calendarDay.innerText) <= eventEndDay) {

  //       calendarDay.style.backgroundColor = "rgba(255, 0, 0, 0.4)"
  //       const newPElement = document.createElement("p");
  //       const addTextToPElement = document.createTextNode(`Event Name: ${eventTitle}`);
  //       newPElement.appendChild(addTextToPElement)
  //       calendarDay.appendChild(newPElement)

  //       calendarDay.style.cursor="pointer"

  //       calendarDay.addEventListener("click", handleEventClick)
  //     }
  //   })
  // })

  return (
    <div>
      {}
    </div>
  )
}