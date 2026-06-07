import express, { Router, Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const router = Router()
const prisma = new PrismaClient()

// GET /api/courses
router.get('/', async (req: Request, res: Response) => {
  try {
    const courses = await prisma.course.findMany({
      include: {
        enrollments: true,
        lessons: true,
      },
    })

    res.json(courses)
  } catch (error) {
    console.error('Erro ao buscar cursos:', error)
    res.status(500).json({ error: 'Erro ao buscar cursos' })
  }
})

// GET /api/courses/:id
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    const course = await prisma.course.findUnique({
      where: { id },
      include: {
        lessons: {
          orderBy: { order: 'asc' },
        },
        enrollments: true,
      },
    })

    if (!course) {
      return res.status(404).json({ error: 'Curso não encontrado' })
    }

    res.json(course)
  } catch (error) {
    console.error('Erro ao buscar curso:', error)
    res.status(500).json({ error: 'Erro ao buscar curso' })
  }
})

// POST /api/courses/:id/enroll
router.post('/:id/enroll', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const userId = (req as any).userId // Vem do middleware de autenticação

    if (!userId) {
      return res.status(401).json({ error: 'Não autorizado' })
    }

    // Verificar se já está inscrito
    const existing = await prisma.enrollment.findUnique({
      where: {
        userId_courseId: {
          userId,
          courseId: id,
        },
      },
    })

    if (existing) {
      return res.status(400).json({ error: 'Já inscrito neste curso' })
    }

    // Criar inscrição
    const enrollment = await prisma.enrollment.create({
      data: {
        userId,
        courseId: id,
      },
    })

    res.status(201).json(enrollment)
  } catch (error) {
    console.error('Erro ao inscrever:', error)
    res.status(500).json({ error: 'Erro ao inscrever' })
  }
})

export default router
