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

export type LinksPage = {
  constent: string,
  title: string,
  uri: string
}

export type Event = {
  eventType: string,
  eventName: string,
  eventStartDate: string,
  eventEndDate: string,
  eventDescription: string,
}

export type EventType = {
  event: Event,
  uri: String,
  title: String
}

export type dateDateIdAndEvents = {
  month?: String,
  year?: number,
  calendarDayElementId?: string,
  calendarCellNumber?: number,
  events?: EventType[]
}