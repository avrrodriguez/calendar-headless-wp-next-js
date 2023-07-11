import { dateDateIdAndEvents, EventType } from "types/graphql/graphql"

export default function filterEvents(month: String, year: number, calendarCellNumber: number, events: EventType[]): EventType[] {
  const date: Date = new Date(`${month} 1, ${year}`)
  const startMonthDay: number = date.getDay()
  const calendarDayNumber: number = calendarCellNumber - startMonthDay

  console.log(parseInt(events[0].event.eventEndDate.slice(0, 2)), parseInt(events[0].event.eventStartDate.slice(0, 2)))
  console.log((calendarDayNumber >= parseInt(events[0].event.eventStartDate.slice(0, 2)) && calendarDayNumber <= parseInt(events[0].event.eventEndDate.slice(0, 2))))

  const filteredEvents = events
    .filter((calendarYearEvent)=>
      (parseInt(calendarYearEvent.event.eventStartDate.slice(6, 10)) || parseInt(calendarYearEvent.event.eventEndDate.slice(6, 10))) === year
    )
    .filter((calendarMonthEvent)=>
      (parseInt(calendarMonthEvent.event.eventStartDate.slice(3, 5)) || parseInt(calendarMonthEvent.event.eventEndDate.slice(3, 5))) === (date.getMonth() + 1)
    )
    .filter((calendarDayEvent)=> (calendarDayNumber >= parseInt(calendarDayEvent.event.eventStartDate.slice(0, 2)) && calendarDayNumber <= parseInt(calendarDayEvent.event.eventEndDate.slice(0, 2)))
    )

    console.log(filteredEvents)

  return filteredEvents
}