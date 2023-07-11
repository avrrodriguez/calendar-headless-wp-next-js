import { dateDateIdAndEvents, EventType } from "types/graphql/graphql"

export default function SetEventDays(events: EventType[]): void {

  const eventStartDay = parseInt(events[0].event.eventStartDate.slice(0, 2))
  console.log(parseInt(events[0].event.eventStartDate.slice(0, 2)))
  const eventEndDay = parseInt(events[0].event.eventEndDate.slice(0, 2))
  const eventTitle = events[0].title

  function handleEventClick(){
    window.location.href = `/calendar/${events[0].uri}`
  }

  const setEventDays = 
  [...Array(6).keys()].map((col) => {
    [...Array(7).keys()].map((row)=>{
      const calendarDay = document.getElementById(`col-${col}-row-${row}`)
      if (parseInt(calendarDay.innerText) >= eventStartDay && parseInt(calendarDay.innerText) <= eventEndDay) {

        calendarDay.style.backgroundColor = "rgba(255, 0, 0, 0.4)"
        const newPElement = document.createElement("p");
        const addTextToPElement = document.createTextNode(`Event Name: ${eventTitle}`);
        newPElement.appendChild(addTextToPElement)
        calendarDay.appendChild(newPElement)

        calendarDay.style.cursor="pointer"

        calendarDay.addEventListener("click", handleEventClick)
      }
    })
  })
}