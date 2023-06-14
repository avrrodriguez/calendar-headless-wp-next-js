import GetCalendarMonthDays from "helpers/GetCalendarMonthDays"
import Header from "./Header"

export default function Calendar(): JSX.Element {


  return (
    <div className="grid-container" style={{height: "100vh"}}>
        <div className="row">
          <h1 className="col">calendar goes here</h1>
        </div>
        {[...Array(GetCalendarMonthDays("June")).keys()].map((number)=>{
          return <div className="col" id={number.toString()} key={number+1}>
            {number+1}
          </div>
        })}
    </div>
  )
  }