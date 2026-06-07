import express, { Router, Request, Response } from 'express'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'

const router = Router()
const prisma = new PrismaClient()

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1h'

interface SignupRequest extends Request {
  body: {
    email: string
    password: string
    name: string
  }
}

interface LoginRequest extends Request {
  body: {
    email: string
    password: string
  }
}

// POST /api/auth/signup
router.post('/signup', async (req: SignupRequest, res: Response) => {
  try {
    const { email, password, name } = req.body

    // Validação
    if (!email || !password || !name) {
      return res.status(400).json({ error: 'Email, password e name são obrigatórios' })
    }

    // Verificar se usuário já existe
    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (existingUser) {
      return res.status(400).json({ error: 'Usuário já existe' })
    }

    // Hash da senha
    const hashedPassword = await bcryptjs.hash(password, 10)

    // Criar usuário
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    })

    // Gerar token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    )

    res.status(201).json({
      message: 'Usuário criado com sucesso',
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    })
  } catch (error) {
    console.error('Erro ao criar usuário:', error)
    res.status(500).json({ error: 'Erro ao criar usuário' })
  }
})

// POST /api/auth/login
router.post('/login', async (req: LoginRequest, res: Response) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ error: 'Email e password são obrigatórios' })
    }

    // Encontrar usuário
    const user = await prisma.user.findUnique({ where: { email } })
    if (!user) {
      return res.status(401).json({ error: 'Email ou senha incorretos' })
    }

    // Verificar senha
    const passwordMatch = await bcryptjs.compare(password, user.password || '')
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Email ou senha incorretos' })
    }

    // Gerar token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    )

    res.json({
      message: 'Login realizado com sucesso',
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    })
  } catch (error) {
    console.error('Erro ao fazer login:', error)
    res.status(500).json({ error: 'Erro ao fazer login' })
  }
})

// POST /api/auth/logout
router.post('/logout', (req: Request, res: Response) => {
  // Logout é geralmente tratado no frontend (removendo token)
  res.json({ message: 'Logout realizado com sucesso' })
})

export default router
