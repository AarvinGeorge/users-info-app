import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main >
      <h1>
        Home
      </h1>
      <p>
        <Link href='/users'>Link to Users</Link>
      </p>
    </main>
  )
}
