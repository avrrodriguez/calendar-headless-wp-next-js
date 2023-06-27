import EventPage from "components/EventPage"
import { EventType } from "types/graphql/graphql"
import { client } from "lib/apollo";
import { gql } from "@apollo/client";
import { useEffect } from "react"

type typeOfEvent = {
  calendar_event: EventType[]
}

export default function SlugPage({ calendar_event }: typeOfEvent): JSX.Element {
  useEffect(() => {console.log(document.URL)})
  return (
    <div>
      <h1>AYOOO</h1>
      {/* <EventPage event={event}></EventPage> */}
    </div>
  )
} 

export async function getStaticProps({ params }: any) {
  const GET_POST_BY_URI = gql`
    query GetPostByURI($id: ID!) {
      post(id: $id, idType: URI) {
        title
        content
        date
        uri
        author {
          node {
            firstName
            lastName
          }
        }
      }
    }
  `;
  const response = await client.query({
    query: GET_POST_BY_URI,
    variables: {
      id: params.uri,
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