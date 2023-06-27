import { EventType } from "types/graphql/graphql" 

type typeOfEvent = {
  calendar_event: EventType
}

export default function EventPage({ calendar_event }: typeOfEvent): JSX.Element {
  return (
    <div>
      <h1>
        Event Title
      </h1>
      <p>
        Event description
      </p>
    </div>
  )
}