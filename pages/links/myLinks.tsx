import { gql } from "@apollo/client"
import Header from "components/Header"
import { client } from "lib/apollo"
import { LinksPage } from "types/graphql/graphql"

type setLinksType = {
  linksPage: LinksPage
}

export default function myLinks({ linksPage }: setLinksType): JSX.Element {

  return(
    <div>
      <Header></Header>
      <h1>{linksPage.title}</h1>
    </div>
  )
}


export async function getStaticProps() {
  const GET_LINKS = gql`
    query getMyLinksPage {
      page(id: "my-links", idType: URI) {
        content
        title
        uri
      }
    }
  `;

  const response = await client.query({
    query: GET_LINKS,
  });
  const linksPage = response?.data?.page;
  return {
    props: {
      linksPage,
    },
  };
}