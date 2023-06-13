type AuthorNode = {
  firstName: string,
  lastName: string
}

type PostAuthor = {
  node: AuthorNode
}

export type Post = {
  title: string,
  content: string,
  uri: string,
  date: string,
  author: PostAuthor
}

// export type Form = {
//   content: string,
//   date: string,
//   title: string,
//   uri: string
// }

export type LinksPage = {
  constent: string,
  title: string,
  uri: string
}

export type Event = {
  eventType: string,
  eventName: string,
  eventStartDate: string,
  eventEndDate: string
  eventDescription: string
}