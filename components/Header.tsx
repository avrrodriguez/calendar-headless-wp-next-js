import Link from "next/link"

export default function Header(): JSX.Element {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/links/myLinks">My Links</Link>
      <Link href="/image/imagePage">Image Page</Link>
      <Link href="/calendar/index">Calendar</Link>
      <Link href="/contact/contactMePage">Contact Me</Link>
    </div>
  )
}