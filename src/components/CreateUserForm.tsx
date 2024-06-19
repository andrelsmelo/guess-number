'use client'

import { useState } from 'react'
import { createUser } from '@/utils/api'
import Button from './Button'
import { useRouter } from 'next/navigation'
import { Bounce, toast } from 'react-toastify'

const CreateUserForm = () => {
  const [username, setUsername] = useState('')
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const response = await createUser({ username })

    if (response.status === 200 || response.status === 201) {
      toast.success('Usuário logado com sucesso!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Bounce,
        icon: false,
      })

      sessionStorage.setItem('username', username)
      router.push('/')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="text-black px-4 py-2 mt-4 rounded-s-lg"
        placeholder="Nick"
        required
      />
      <Button
        type="submit"
        variant="success"
        className="rounded-s-none rounded-e-lg"
      >
        Entrar
      </Button>
    </form>
  )
}

export default CreateUserForm
