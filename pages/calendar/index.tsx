import { Event } from "types/graphql/graphql"
import Calendar from "components/Calendar"

type EventType = {
  events: Event
}

export default function CalendarPage({ events }: EventType): JSX.Element {

  return (
    <div>
      <Calendar></Calendar>
    </div>
  )
}