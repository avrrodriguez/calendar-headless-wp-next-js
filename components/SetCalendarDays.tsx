import { useEffect } from "react"
import GetCalendarMonthDays from "helpers/GetCalendarMonthDays"
import { client } from "../lib/apollo";
import { gql } from "@apollo/client";
import { Event } from "types/graphql/graphql"

type typeOfEvent = {
  calendar_posts: Event[]
}

type typeOfCalendarDays = {
  month: String
  year: String
}

export function SetCalendarDays({ month, year }: typeOfCalendarDays, { calendar_posts }: typeOfEvent): JSX.Element {
  console.log(calendar_posts)
  const date: Date = new Date(`${month} 1, ${year}`)
  const startMonthDay: Number = date.getDay()
  var endMonthDay = GetCalendarMonthDays(`${month}`)
  var day = 1
  
  function displayDay() {
    [...Array(6).keys()].map((row) => {
      [...Array(7).keys()].map((col)=>{
          if (((col >= startMonthDay && row == 0) || row > 0) && day <= endMonthDay) {
            document.getElementById(`col-${col}-row-${row}`).innerText = day.toString()
            day++
          } else {
            document.getElementById(`col-${col}-row-${row}`).style.backgroundColor = "gray"
          }
      })
    })
  }

  useEffect(() => {displayDay()})

  return (
    <div></div>
  )
}

export async function getStaticProps() {
  const GET_CALENDAR_POSTS = gql`
    query GetCalendarPostsByName {
      category(id: "calendar_event", idType: NAME) {
        posts {
          nodes {
            event {
              eventDescription
              eventEndDate
              eventName
              eventStartDate
              eventType
              fieldGroupName
            }
            uri
            title
          }
        }
      }
    }
  `;

  const response = await client.query({
    query: GET_CALENDAR_POSTS,
  });
  const calendar_posts = response?.data?.category?.posts?.nodes;
  console.log(calendar_posts)
  return {
    props: {
      calendar_posts,
    },
  };
}