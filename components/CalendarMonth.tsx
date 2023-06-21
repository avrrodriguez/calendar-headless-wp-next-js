import GetCalendarMonthDays from "helpers/GetCalendarMonthDays"
import { useEffect } from "react"
import { dateMonthYear } from "types/graphql/graphql"
import { Event } from "types/graphql/graphql";

export default function CalendarMonth({ month, year }: dateMonthYear): JSX.Element {
  const date: Date = new Date(`${month} 1, ${year}`)
  const startMonthDay: Number = date.getDay()
  var endMonthDay = GetCalendarMonthDays(`${month}`)
  var day = 1

  let anEvent: Event = {
    eventType: "holiday",
    eventName: "Ram",
    eventStartDate: "05/05/2023",
    eventEndDate: "05/05/2023",
    eventDescription: "An even that celebrates something"
  }

  function CalendarDays(): void {
    [...Array(6).keys()].map((row) => {
      [...Array(7).keys()].map((col)=>{
          if(((col >= startMonthDay && row == 0) || row > 0) && day <= endMonthDay) {
            document.getElementById(`col-${col}-row-${row}`).innerText = day.toString()
            day++
          } else {
            document.getElementById(`col-${col}-row-${row}`).style.backgroundColor = "gray"
          }
      })
    })
  }

  function addEvents(event: Event): void {}

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
                  [...Array(6).keys()].map((row)=>{
                    return(
                      <div 
                      className="row" 
                      style={{
                        border: "2px solid gray", 
                        height: "105px", 
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