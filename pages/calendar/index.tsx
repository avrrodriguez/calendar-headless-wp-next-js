import { Event } from "types/graphql/graphql"
import CalendarAllMonths from "components/CalendarAllMonths"

type EventType = {
  events: Event
}

export default function CalendarPage({ events }: EventType): JSX.Element {

  return (
    <div>
      <CalendarAllMonths></CalendarAllMonths>
    </div>
  )
}