import { Event } from "types/graphql/graphql"

type EventType = {
  events: Event
}

export default function Calendar({ events }: EventType): JSX.Element {

  return (
    <div>
      <h1>This is the calendar page</h1>
    </div>
  )
}