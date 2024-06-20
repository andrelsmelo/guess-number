'use client'

import { useState } from 'react'
import { createUser } from '@/utils/api'
import Button from './Button'
import { useRouter } from 'next/navigation'
import { Bounce, toast } from 'react-toastify'

const CreateUserForm = () => {
  const [username, setUsername] = useState('')
  const [pix, setPix] = useState('')
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (username.length !== 5) {
      toast.error('Nick inválido, o mesmo deve ter exatamente 5 letras.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Bounce,
      })
      return
    }

    const response = await createUser({ username, pix })

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
    } else if (response.status === 400) {
      toast.error('Aconteceu um erro ao logar :(', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Bounce,
      })
    } else if (response.status === 403) {
      toast.error('Nick inválido, o mesmo deve ter 5 letras.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Bounce,
      })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="text-black px-4 py-2 mt-4 rounded-s-lg border"
        placeholder="Nick *"
        maxLength={5}
        minLength={5}
        required
      />
      <input
        type="text"
        value={pix}
        onChange={(e) => setPix(e.target.value)}
        className="text-black px-4 py-2 mt-4 border"
        placeholder="Pix"
      />
      <Button
        type="submit"
        variant="success"
        className="rounded-s-none rounded-e-lg border border-green-600"
      >
        Entrar
      </Button>
    </form>
  )
}

export default CreateUserForm
