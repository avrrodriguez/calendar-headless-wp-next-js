import { dateDateIdAndEvents, EventType } from "types/graphql/graphql"

type typeofEvents = {
  events: EventType[]
}

export default function SetEventDays({ events }: typeofEvents): JSX.Element {
  function handleEventClick(){
    window.location.href = `/calendar/${events[0].uri}`
  }

  var keyCount: number = 0

  return (
    <div>
      {events.map((calendarDayEvent) => {
        return (
          <div 
            key={`${calendarDayEvent.event.eventName}-${keyCount}`}
            onClick={()=>{handleEventClick()}} 
            style={{
              cursor: "pointer", 
              backgroundColor: "rgba(255, 0, 0, 0.4)",
              height: "30px",
              fontSize: "10px",
              borderRadius: "10px",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
            >
            <p style={{margin: "0px"}}><b>{calendarDayEvent.event.eventName}:</b></p>
            <p style={{margin: "0px"}}>{calendarDayEvent.event.eventDescription}</p>
          </div>
        )
      })}
    </div>
  )
}