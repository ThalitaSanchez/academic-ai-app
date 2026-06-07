import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  try {
    await prisma.submission.deleteMany()
    await prisma.message.deleteMany()
    await prisma.conversation.deleteMany()
    await prisma.userProgress.deleteMany()
    await prisma.enrollment.deleteMany()
    await prisma.lesson.deleteMany()
    await prisma.course.deleteMany()
    await prisma.user.deleteMany()

    console.log('✅ Dados limpos')

    const user1 = await prisma.user.create({
      data: {
        email: 'estudante@example.com',
        name: 'João Silva',
        password: 'hashedpassword123',
      },
    })

    const user2 = await prisma.user.create({
      data: {
        email: 'professora@example.com',
        name: 'Maria Santos',
        password: 'hashedpassword456',
      },
    })

    console.log('✅ Usuários criados')

    const cursoBiomedicina = await prisma.course.create({
      data: {
        title: 'Introdução à Biomedicina',
        description: 'Aprenda os fundamentos da biomedicina com IA',
        category: 'BIOMEDICINA',
      },
    })

    const cursoRadiologia = await prisma.course.create({
      data: {
        title: 'Fundamentos de Radiologia',
        description: 'Interpretação de imagens radiológicas',
        category: 'RADIOLOGIA',
      },
    })

    const cursoFarmacia = await prisma.course.create({
      data: {
        title: 'Farmacologia Clínica',
        description: 'Estudos de medicamentos e interações',
        category: 'FARMACIA',
      },
    })

    console.log('✅ Cursos criados')

    await prisma.enrollment.create({
      data: {
        userId: user1.id,
        courseId: cursoBiomedicina.id,
      },
    })

    await prisma.enrollment.create({
      data: {
        userId: user1.id,
        courseId: cursoRadiologia.id,
      },
    })

    console.log('✅ Inscrições criadas')
    console.log('🎉 Seed completado com sucesso!')
  } catch (error) {
    console.error('❌ Erro no seed:', error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

main()
