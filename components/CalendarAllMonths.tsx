import CalendarMonth from "./CalendarMonth"
import { EventType } from "types/graphql/graphql"
import { useState } from "react"

type typeOfCalendarPosts = {
  calendar_posts: EventType[]
}

export default function CalendarAllMonths({ calendar_posts }: typeOfCalendarPosts): JSX.Element {
  const currDate: Date = new Date()

  const [monthIndex, setMonthIndex] = useState(currDate.getMonth())
  const [currYear, setCurrYear] = useState(currDate.getFullYear())

  const monthArray: String[] = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]

  function ChangeToPastMonth(): void {    
    monthIndex === 0 ? setMonthIndex(11) : setMonthIndex(monthIndex + 1)
    if (monthIndex == 0) {
      setMonthIndex(11)
      setCurrYear(currYear - 1)
    } else {
      setMonthIndex(monthIndex - 1)
    }
  }
  
  function ChangeToFutureMonth(): void {
    if (monthIndex == 11) {
      setMonthIndex(0)
      setCurrYear(currYear + 1)
    } else {
      setMonthIndex(monthIndex + 1)
    }
  }
  
  return (
    <div className="container" style={{backgroundColor: "#967bb6", height: "100vh"}} >
        <div
          className="calendar-header" 
          style={{
              display: "flex",
              justifyContent: "center", 
              backgroundColor: "#d3d3d3",
              width: "100vh",
              marginRight: "40px",
              marginLeft: "40px",
              marginBottom: "5px",
              marginTop: "20px"
            }}
        >
          <h1 className="Calendar"
          >Calendar</h1>
          <div className="changeMonth" 
              style={{
                display: "flex", 
                flexDirection: "row", 
                alignItems: "center",
                marginLeft: "50px"
            }}
            >
            <button className="left-click" onClick={ChangeToPastMonth}>←</button>
            <p> {monthArray[monthIndex].toUpperCase()} {currYear} </p>
            <button className="right-click" onClick={ChangeToFutureMonth}>→</button>
          </div>
        </div>
        <CalendarMonth month={monthArray[monthIndex]} year={currYear} events={calendar_posts} ></CalendarMonth>;
    </div>
  )
}
