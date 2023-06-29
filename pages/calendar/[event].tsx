import EventPage from "components/EventPage"
import { EventType } from "types/graphql/graphql"
import { client } from "lib/apollo";
import { gql } from "@apollo/client";

type typeOfEvent = {
  calendar_event: EventType
}

export default function SlugPage({ calendar_event }: typeOfEvent): JSX.Element {
  // console.log(calendar_event.event.eventName)
  return (
    <div>
      <EventPage calendar_event={calendar_event}></EventPage>
    </div>
  )
} 

export async function getStaticProps({ params }: any) {
  const GET_POST_BY_URI = gql`
    query GetCalendarPostsByURI($id: ID!) {
      post(id: $id, idType: URI) {
        title
        uri
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
  `;
  const response = await client.query({
    query: GET_POST_BY_URI,
    variables: {
      id: params.event,
    },
  });
  const calendar_event = response?.data?.post;
  return {
    props: {
      calendar_event,
    },
  };
}

export async function getStaticPaths() {
  const paths: string[] = [];
  return {
    paths,
    fallback: "blocking",
  };
}