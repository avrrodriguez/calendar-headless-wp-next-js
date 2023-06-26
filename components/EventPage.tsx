import { EventType } from "types/graphql/graphql" 
import { client } from "../lib/apollo";
import { gql } from "@apollo/client";

type typeOfEvent = {
  event: EventType
}

export default function EventPage({ event }: typeOfEvent): JSX.Element {
  return (
    <div>
      <h1>
        Event Title
      </h1>
      <p>
        Event description
      </p>
    </div>
  )
}