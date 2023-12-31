import { dateDateIdAndEvents, EventType } from "types/graphql/graphql"
import { WeekDays } from "./WeekDays";
import { SetCalendarDays } from "./SetCalendarDays";
import filterEvents from "helpers/filterEvents";

export default function CalendarMonth({ month, year, events }: dateDateIdAndEvents): JSX.Element {
  const filteredEvents: EventType[] = filterEvents(month, year, events)
  var calendarCellNumber: number = 0
  return (
    <div>
        <WeekDays></WeekDays>
        <div className="calendar-boxes" style={{display: "grid", justifyItems: "center"}}>
        {
          [...Array(6).keys()].map((col) => {
            return(
              <div className="col" style={{display: "grid", gridTemplateColumns: "repeat(7, 1fr)"}} id={`col-${col}`} key={`col-${col}`}>
                 {
                   [...Array(7).keys()].map((row)=>{
                    calendarCellNumber++
                    return(
                      <div 
                      className="row" 
                      style={{
                        border: "2px solid gray", 
                        height: "100px", 
                        width: "110px"
                      }} 
                      id={`col-${col}-row-${row}`} 
                      key={`col-${col}-row-${row}`}
                      > 
                        <SetCalendarDays 
                          month={month} 
                          year={year}
                          calendarDayElementId={`col-${col}-row-${row}`}
                          calendarCellNumber={calendarCellNumber}
                          events={filteredEvents}
                        />
                      </div>
                    )
                  }
                  )
                 } 
              </div>
            )
          })
        }
        </div>
    </div>
  )
  }