import GetCalendarMonthDays from "helpers/GetCalendarMonthDays"
import { Event } from "types/graphql/graphql"
import { useEffect } from "react"

type TypeOfEvent = {
  events: Event
}

export default function CalendarMonth({ events }: TypeOfEvent): JSX.Element {
  const date: Date = new Date("June 1, 2023")
  const startMonthDay: Number = date.getDay()
  var endMonthDay = GetCalendarMonthDays("june")
  var day = 1

  function CalendarDays() {
    [...Array(5).keys()].map((row) => {
      [...Array(7).keys()].map((col)=>{
        if (day <= endMonthDay) {

          if((col >= startMonthDay && row == 0) || row > 0) {
            document.getElementById(`col-${col}-row-${row}`).innerText = day.toString()
            day = day + 1
          } else {
            document.getElementById(`col-${col}-row-${row}`).style.backgroundColor = "gray"
          }

        }
      })
    })
  }

  useEffect(() => {CalendarDays()})

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
        <div className="calendar-boxes" style={{display: "grid", gridTemplateColumns: "repeat(7, 1fr)", justifyItems: "center"}}>
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