import CalendarMonth from "./CalendarMonth"
import { dateMonthYear } from "types/graphql/graphql";

export default function CalendarAllMonths(): JSX.Element {
  const dateMonthYear: dateMonthYear = {
    month: "July",
    year: "2023"
  }

  return (
    <div style={{backgroundColor: "#967bb6", height: "100vh"}} >
        <div className="calendar-header" style={{display: "flex", justifyContent: "center"}}>
          <h1>Calendar</h1>
        </div>
        <CalendarMonth month={dateMonthYear.month} year={dateMonthYear.year}></CalendarMonth>;
    </div>
  )
}