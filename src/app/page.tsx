import Button from '@/components/Button'
import Game from '@/components/Game'
import Never from '@/components/Never'
import Ranking from '@/components/Ranking'
import LoginIcon from '@/components/icons/Login'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="relative px-4 py-4">
      <Link href="/login">
        <Button variant="transparent" className="fixed right-0 bottom-0">
          <LoginIcon />
        </Button>
      </Link>
      <Never />
      <Game />
      <Ranking />
    </main>
  )
}
