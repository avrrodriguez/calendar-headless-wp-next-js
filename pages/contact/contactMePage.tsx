import { gql, useMutation } from "@apollo/client"
import { client } from "lib/apollo"
// import { Form } from "types/graphql/graphql"
import Header from "components/Header";
import Footer from "../../components/Footer";

// const SEND_CONTACT_REQUEST = sql`
// mutation 
// `

export default function contactMePage({ page }: any): JSX.Element {

  return (
    <div>
      <Header></Header>
      <h1>Hi</h1>
      <Footer></Footer>
    </div>
  )
}


