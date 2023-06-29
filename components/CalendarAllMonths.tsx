import CalendarMonth from "./CalendarMonth"
import { dateMonthYear } from "types/graphql/graphql";
import { useState } from "react";

export default function CalendarAllMonths(): JSX.Element {
  const [monthIndex, setMonthIndex] = useState(5)
  const [currYear, setCurrYear] = useState(2023)

  const monthArray: String[] = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]


  function ChangeToPastMonth(){
    console.log("past month")
  }

  function ChangeToFutureMonth(){
    console.log("future month")
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
            <p>Current Month: {monthArray[monthIndex]}</p>
            <button className="right-click" onClick={ChangeToFutureMonth}>→</button>
          </div>
        </div>
        <CalendarMonth month={monthArray[monthIndex]} year={currYear}></CalendarMonth>;
    </div>
  )
}
