import GetCalendarMonthDays from "helpers/GetCalendarMonthDays"
import { Event } from "types/graphql/graphql"
import { useEffect } from "react"

type TypeOfEvent = {
  events: Event
}

export default function CalendarMonth({ events }: TypeOfEvent): JSX.Element {
  const date: Date = new Date("05/05/2023")
  const dayName: String[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  console.log(dayName[date.getDay()])

  useEffect(() => {
    var calendarDay = document.getElementById("col-0-row-0");
  })

  return (
    <div>
        <div className="weekdays" style={{display:"grid", gridTemplateColumns: "repeat(7, 1fr)", justifyItems: "center"}}>
          <div>Sunday</div>
          <div>Monday</div>
          <div>Tuesday</div>
          <div>Wednesday</div>
          <div>Thursday</div>
          <div>Friday</div>
          <div>Saturday</div>
        </div>
        <div className="calendar-days" style={{display: "grid", gridTemplateColumns: "repeat(7, 1fr)", justifyItems: "center"}}>
        {
          [...Array(7).keys()].map((col) => {
            return(
              <div className="col" style={{display: "grid"}} id={`col-${col}`} key={`col-${col}`}>
                 {
                  [...Array(5).keys()].map((row)=>{
                    return(
                      <div 
                      className="row" 
                      style={{
                        border: "2px solid gray", 
                        height: "115px", 
                        width: "110px", 
                        backgroundColor: "white"
                      }} 
                      id={`col-${col}-row-${row}`} 
                      key={`col-${col}-row-${row}`}
                      ></div>
                    )
                  })
                 } 
              </div>
            )
          })
        }
        </div>
    </div>
  )
  }