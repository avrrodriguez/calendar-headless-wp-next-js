import { responsePathAsArray } from "graphql"
import GetCalendarMonthDays from "helpers/GetCalendarMonthDays"
import Header from "./Header"

export default function Calendar(): JSX.Element {


  return (
    <div>
        <div className="calendar-header">
          <h1>Calendar</h1>
        </div>
        <div className="calendar-days" style={{display: "grid", gridTemplateColumns: "repeat(7, 1fr)", columnGap: "10px"}}>
        {
          [...Array(7).keys()].map((col) => {
            return(
              <div className="col" style={{display: "grid", backgroundColor: "orange", rowGap:"10px"}} id={`col-${col}`} key={`col-${col}`}>
                 {
                  [...Array(5).keys()].map((row)=>{
                    return(
                      <div className="row" style={{backgroundColor: "green", height: "115px", width: "110px"}} id={`col-${col}-row-${row}`} key={`col-${col}-row-${row}`}>1</div>
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