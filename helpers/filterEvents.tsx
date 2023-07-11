import {EventType } from "types/graphql/graphql"

export default function filterEvents(month: String, year: number, events: EventType[]): EventType[] {
  const date: Date = new Date(`${month} 1, ${year}`)

  const filteredEvents = events
  .filter((calendarYearEvent)=>
  (parseInt(calendarYearEvent.event.eventStartDate.slice(6, 10)) || parseInt(calendarYearEvent.event.eventEndDate.slice(6, 10))) === year
  )
  .filter((calendarMonthEvent)=>
  (parseInt(calendarMonthEvent.event.eventStartDate.slice(3, 5)) || parseInt(calendarMonthEvent.event.eventEndDate.slice(3, 5))) === (date.getMonth() + 1)
  )

  return filteredEvents
}