import CalendarMonth from "./CalendarMonth"
import { dateMonthYear } from "types/graphql/graphql";
import ChangeMonth from "components/ChangeMonth"

export default function CalendarAllMonths(): JSX.Element {

  const dateMonthYear: dateMonthYear = {
    month: "May",
    year: "2023"
  }

  return (
    <div style={{backgroundColor: "#967bb6", height: "100vh"}} >
        <div
          className="calendar-header" 
          style={{display: "flex", 
              justifyContent: "center", 
              backgroundColor: "#d3d3d3",
              marginRight: "40px",
              marginLeft: "40px",
              marginBottom: "5px"
            }}
        >
          <h1>Calendar</h1>
          <ChangeMonth month={dateMonthYear.month} />
        </div>
        <CalendarMonth month={dateMonthYear.month} year={dateMonthYear.year}></CalendarMonth>;
    </div>
  )
}
