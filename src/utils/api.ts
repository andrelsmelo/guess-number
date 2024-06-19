'use server'

import { sql } from '@vercel/postgres'

const validateUser = (username: string) => {
  if (!username || username.length !== 5) {
    return {
      error: 'Nick invalido, o mesmo deve ter 5 letras.',
    }
  }
  return null
}

export async function createUser(data: { username: string }) {
  const { username } = data

  const validationError = validateUser(username)
  if (validationError) {
    return { status: 403, ...validationError }
  }

  try {
    const existingUserResult =
      await sql`SELECT * FROM users WHERE username = ${username}`
    if (existingUserResult.rows.length > 0) {
      return { status: 201, error: 'Usuário já existe.' }
    }

    await sql`INSERT INTO users (username) VALUES (${username})`
    return { status: 200, message: 'Usuário criado com sucesso.' }
  } catch (error) {
    return { status: 400, error: 'An error occurred while creating the user.' }
  }
}

export async function sendScore(user: string, difficulty: string) {
  try {
    const userResult = await sql`SELECT * FROM users WHERE username = ${user}`

    if (userResult.rows.length === 0) {
      return { status: 404, error: 'Usuário não encontrado.' }
    }

    const difficultyMultipliers: { [key: string]: number } = {
      i: 100,
      p: 50,
      d: 25,
      m: 10,
      f: 5,
    }

    const multiplier = difficultyMultipliers[difficulty]
    if (!multiplier) {
      return { status: 400, error: 'Dificuldade inválida.' }
    }

    const scoreResult =
      await sql`SELECT * FROM ranking WHERE username = ${user} and difficulty = ${difficulty}`
    if (scoreResult.rows.length === 0) {
      await sql`INSERT INTO ranking (username, score, difficulty) VALUES (${user}, ${multiplier}, ${difficulty})`
    } else {
      await sql`UPDATE ranking SET score = score + ${multiplier} WHERE username = ${user} and difficulty = ${difficulty}`
    }

    return { status: 200, message: 'Pontuação enviada com sucesso.' }
  } catch (error) {
    return { status: 400, error: 'An error occurred while sending the score.' }
  }
}

export async function getRanking() {
  try {
    const result =
      await sql`SELECT username, SUM(score) as qtd FROM ranking GROUP BY username ORDER BY qtd DESC LIMIT 10`
    return { status: 200, data: result.rows }
  } catch (error) {
    return {
      status: 500,
      error: 'An error occurred while fetching the ranking.',
    }
  }
}
