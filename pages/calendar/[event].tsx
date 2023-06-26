import EventPage from "components/EventPage"
import { EventType } from "types/graphql/graphql"

type typeOfEvent = {
  event: EventType[]
}

export default function SlugPage({ event }: typeOfEvent): JSX.Element {
  return (
    <div>
      <h1>AYOOO</h1>
      {/* <EventPage event={event}></EventPage> */}
    </div>
  )
} 