import CalendarMonth from "./CalendarMonth"
import { useState } from "react";

export default function CalendarAllMonths(): JSX.Element {
  const [monthIndex, setMonthIndex] = useState(Number)
  const [currYear, setCurrYear] = useState(Number)

  const monthArray: String[] = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]

  // https://stackoverflow.com/questions/28314368/how-to-maintain-state-after-a-page-refresh-in-react-js
  // use local storage to store changing values and then set usestate to be whats in the localstorage
  // is local storage empty get current month/year

  function ChangeToPastMonth(){    
    monthIndex == 0 ? setMonthIndex(11) : setMonthIndex(monthIndex-1)
    // window.location = window.location
    window.top.location = window.top.location
  }

  function ChangeToFutureMonth(){
    monthIndex == 11 ? (setMonthIndex(0), setCurrYear(currYear+1)) : setMonthIndex(monthIndex+1)
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
