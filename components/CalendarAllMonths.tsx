import CalendarMonth from "./CalendarMonth"
import { Event } from "types/graphql/graphql";

export default function CalendarAllMonths() {
  const month = "june";

  let anEvent: Event = {
    eventType: "holiday",
    eventName: "Ram",
    eventStartDate: "05/05/2023",
    eventEndDate: "05/05/2023",
    eventDescription: "An even that celebrates something"
  }

  return (
    <div style={{backgroundColor: "#967bb6", height: "100vh"}} >
        <div className="calendar-header" style={{display: "flex", justifyContent: "center"}}>
          <h1>Calendar</h1>
        </div>
        <CalendarMonth events={anEvent}></CalendarMonth>;
    </div>
  )
}