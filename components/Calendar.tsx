import { responsePathAsArray } from "graphql"
import GetCalendarMonthDays from "helpers/GetCalendarMonthDays"
import Header from "./Header"

export default function Calendar(): JSX.Element {


  return (
    <div style={{backgroundColor: "#967bb6", height: "100vh"}}>
        <div className="calendar-header" style={{display: "flex", justifyContent: "center"}}>
          <h1>Calendar</h1>
        </div>
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