import { datePlusEvent, EventType } from "types/graphql/graphql"

export default function filterEvents(month: String, year: number, events: EventType[]): EventType[] {
  const date: Date = new Date(`${month} 1, ${year}`)

  const filteredEvents = events
    .filter((calendar_post)=>
      (parseInt(calendar_post.event.eventStartDate.slice(6, 10)) || parseInt(calendar_post.event.eventEndDate.slice(6, 10))) === year
    )
    .filter((calendar_post)=>
      (parseInt(calendar_post.event.eventStartDate.slice(3, 5)) || parseInt(calendar_post.event.eventEndDate.slice(3, 5))) === (date.getMonth() + 1)
    )

  return filteredEvents
}