import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  try {
    // Limpar dados existentes
    await prisma.submission.deleteMany()
    await prisma.message.deleteMany()
    await prisma.conversation.deleteMany()
    await prisma.userProgress.deleteMany()
    await prisma.enrollment.deleteMany()
    await prisma.lesson.deleteMany()
    await prisma.course.deleteMany()
    await prisma.user.deleteMany()

    console.log('✅ Dados limpos')

    // Criar usuários de exemplo
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

    // Criar cursos
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

    // Criar aulas
    await prisma.lesson.create({
      data: {
        courseId: cursoBiomedicina.id,
        title: 'Células e Tecidos',
        description: 'Estrutura e função das células',
        content: 'As células são as unidades básicas da vida...',
        order: 1,
      },
    })

    await prisma.lesson.create({
      data: {
        courseId: cursoBiomedicina.id,
        title: 'Genética Molecular',
        description: 'DNA, RNA e síntese de proteínas',
        content: 'A genética molecular estuda a estrutura...',
        order: 2,
      },
    })

    console.log('✅ Aulas criadas')

    // Criar inscrições
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

    // Criar progresso
    await prisma.userProgress.create({
      data: {
        userId: user1.id,
        courseId: cursoBiomedicina.id,
        lessonsCompleted: 1,
        score: 85,
      },
    })

    console.log('✅ Progresso criado')

    // Criar conversa de exemplo
    const conversation = await prisma.conversation.create({
      data: {
        userId: user1.id,
        topic: 'Dúvidas sobre Biomedicina',
      },
    })

    await prisma.message.create({
      data: {
        conversationId: conversation.id,
        role: 'user',
        content: 'O que é uma célula?',
      },
    })

    await prisma.message.create({
      data: {
        conversationId: conversation.id,
        role: 'assistant',
        content: 'Uma célula é a unidade básica da vida, contendo citoplasma e núcleo...',
      },
    })

    console.log('✅ Conversa criada')
    console.log('🎉 Seed completado com sucesso!')
  } catch (error) {
    console.error('❌ Erro no seed:', error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

main()
