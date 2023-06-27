import { EventType } from "types/graphql/graphql" 

type typeOfEvent = {
  calendar_event: EventType
}

export default function EventPage({ calendar_event }: typeOfEvent): JSX.Element {
  return (
    <div>
      <h1 style={{display:"grid",justifyContent: "center"}}>
        {calendar_event.event.eventName}
      </h1>
      <h2>
        Event Description: 
        <p style={{display:"grid",justifyContent: "center"}}>
          {calendar_event.event.eventDescription}
        </p>
      </h2>
    </div>
  )
}