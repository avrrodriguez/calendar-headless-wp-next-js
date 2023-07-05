import CalendarAllMonths from "components/CalendarAllMonths"
import { EventType } from "types/graphql/graphql"
import { client } from "lib/apollo";
import { gql } from "@apollo/client";

type typeOfEventType = {
  calendar_posts: EventType[]
}


export default function CalendarPage({ calendar_posts }: typeOfEventType): JSX.Element {

  return (
    <div>
      <CalendarAllMonths calendar_posts={calendar_posts}/>
    </div>
  )
}

export async function getStaticProps() {

  // Request for event info
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

  const response_event = await client.query({
    query: GET_CALENDAR_POSTS,
  });

  const calendar_posts = response_event?.data?.category?.posts?.nodes;

  return {
    props: {
      calendar_posts,
    },
  };
}