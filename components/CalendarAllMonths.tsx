import CalendarMonth from "./CalendarMonth"
import { useState, useEffect, useLayoutEffect } from "react";

export default function CalendarAllMonths(): JSX.Element {
  const [monthIndex, setMonthIndex] = useState(0)
  const [currYear, setCurrYear] = useState(2023)

  const monthArray: String[] = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]

  function setStorageMonthIndex(): void {
    const timeNow: Date = new Date()
    const currentMonth: number = timeNow.getMonth()
    
    if (sessionStorage.getItem("month-num")) {
        setMonthIndex(parseInt(sessionStorage?.getItem("month-num")))

    } else {
      sessionStorage?.setItem("month-num", currentMonth.toString())
    }

  }

  function setStorageYear(): void {
    const timeNow: Date = new Date()
    const currentYear: number = timeNow.getFullYear()

    if (sessionStorage.getItem("curr-year")) {
      setCurrYear(parseInt(sessionStorage.getItem("curr-year")))

    } else {
      sessionStorage.setItem("curr-year", currentYear.toString())
    }
  }

  function ChangeToPastMonth(): void {    
    var newMonth: number = 0
    if (monthIndex == 0) {
      newMonth = 11
      sessionStorage.setItem("curr-year", (currYear-1).toString())
    } else {
      newMonth = monthIndex - 1
    }
    sessionStorage.setItem("month-num", newMonth.toString())

    window.top.location = window.top.location
  }
  
  function ChangeToFutureMonth(): void {
    var newMonth: number = 0
    if (monthIndex == 11) {
      newMonth = 0
      sessionStorage.setItem("curr-year", (currYear+1).toString())
    } else {
      newMonth = monthIndex + 1
    }
    sessionStorage.setItem("month-num", newMonth.toString())

    window.top.location = window.top.location
  }
  
  useLayoutEffect(()=>{
    setStorageMonthIndex()
  }, [monthIndex])
  useLayoutEffect(()=>{setStorageYear()}, [])


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
        <CalendarMonth month={monthArray[monthIndex]} year={currYear}></CalendarMonth>;
    </div>
  )
}
