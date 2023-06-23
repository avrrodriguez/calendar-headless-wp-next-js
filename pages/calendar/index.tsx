import CalendarAllMonths from "components/CalendarAllMonths"
import { client } from "lib/apollo";
import { gql } from "@apollo/client";
import { EventType, EventURI} from "types/graphql/graphql"

type typeOfEventType = {
  calendar_posts: EventType[]
}

export default function CalendarPage({ calendar_posts }: typeOfEventType): JSX.Element {
  if (calendar_posts) {
    console.log(calendar_posts.length)
    console.log(calendar_posts[0].event.eventName)
  }

  return (
    <div>
      <CalendarAllMonths></CalendarAllMonths>
    </div>
  )
}

export async function getStaticProps() {
  console.log("here")
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
          }
        }
      }
    }
  `;

  const response_event = await client.query({
    query: GET_CALENDAR_POSTS,
  });

  console.log(response_event)

  const calendar_posts = response_event?.data?.category?.posts?.nodes;

  // Request for calendar posts uri and title
//   const GET_CALENDAR_POSTS_URI = gql`
//   query GetCalendarPostsByName {
//     category(id: "calendar_event", idType: NAME) {
//       posts {
//         nodes {
//           uri
//           title
//         }
//       }
//     }
//   }
// `;

//   const response_uri = await client.query({
//     query: GET_CALENDAR_POSTS,
//   });

//   const calendar_posts_uri = response_uri?.data?.category?.posts?.nodes

  return {
    props: {
      calendar_posts,
    },
  };
}