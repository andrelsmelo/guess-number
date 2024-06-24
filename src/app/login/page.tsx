import Never from '@/components/Never'
import CreateUserForm from '@/components/CreateUserForm'
import Link from 'next/link'
import Button from '@/components/Button'
import GameIcon from '@/components/icons/Game'

export default function Login() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <Never />
      <CreateUserForm />
      <Link href="/">
        <Button variant="info" className="fixed right-0 bottom-0">
          <GameIcon />
        </Button>
      </Link>
    </main>
  )
}
