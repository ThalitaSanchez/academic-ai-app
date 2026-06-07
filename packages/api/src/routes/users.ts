import express, { Router, Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const router = Router()
const prisma = new PrismaClient()

router.get('/me', async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId

    if (!userId) {
      return res.status(401).json({ error: 'Não autorizado' })
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        name: true,
        avatar: true,
        bio: true,
        createdAt: true,
      },
    })

    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' })
    }

    res.json(user)
  } catch (error) {
    console.error('Erro ao buscar usuário:', error)
    res.status(500).json({ error: 'Erro ao buscar usuário' })
  }
})

router.get('/:id/progress', async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    const progress = await prisma.userProgress.findMany({
      where: { userId: id },
    })

    res.json(progress)
  } catch (error) {
    console.error('Erro ao buscar progresso:', error)
    res.status(500).json({ error: 'Erro ao buscar progresso' })
  }
})

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const userId = (req as any).userId

    if (userId !== id) {
      return res.status(403).json({ error: 'Não autorizado' })
    }

    const { name, bio, avatar } = req.body

    const user = await prisma.user.update({
      where: { id },
      data: {
        ...(name && { name }),
        ...(bio && { bio }),
        ...(avatar && { avatar }),
      },
    })

    res.json(user)
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error)
    res.status(500).json({ error: 'Erro ao atualizar usuário' })
  }
})

export default router
