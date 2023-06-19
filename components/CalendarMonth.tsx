import GetCalendarMonthDays from "helpers/GetCalendarMonthDays"
import { Event } from "types/graphql/graphql"

type TypeOfEvent = {
  events: Event
}

export default function CalendarMonth({ events }: TypeOfEvent): JSX.Element {
  const date: Date = new Date("05/05/2023")
  const dayName: String[] = ["Sunday", "Monday", "Tuesday", "Wedsnesday", "Thursday", "Friday", "Saturday"]
  console.log(dayName[date.getDay()])

  return (
    <div>
        <div className="weekdays" style={{display:"grid", gridTemplateColumns: "repeat(7, 1fr)", justifyItems: "center"}}>
          <div>Sunday</div>
          <div>Monday</div>
          <div>Tuesday</div>
          <div>Wednesday</div>
          <div>Thrusday</div>
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