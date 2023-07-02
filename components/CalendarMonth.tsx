import { dateMonthYear } from "types/graphql/graphql"
import { WeekDays } from "./WeekDays";
import { SetCalendarDays } from "./SetCalendarDays";

export default function CalendarMonth({ month, year }: dateMonthYear): JSX.Element {
  console.log(month)
  return (
    <div>
        <WeekDays></WeekDays>
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
                        height: "100px", 
                        width: "110px", 
                        backgroundColor: "white"
                      }} 
                      id={`col-${col}-row-${row}`} 
                      key={`col-${col}-row-${row}`}
                      > 
                        <SetCalendarDays 
                          month={month} 
                          year={year}
                        ></SetCalendarDays>
                      
                      </div>
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