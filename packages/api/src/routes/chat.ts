import express, { Router, Request, Response } from 'express'
import { OpenAI } from 'openai'

const router = Router()
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

const systemPrompts: Record<string, string> = {
  MEDICINA: 'Você é um especialista em Medicina. Forneça respostas precisas e baseadas em evidências sobre diagnóstico, tratamento e cuidados médicos.',
  RADIOLOGIA: 'Você é um especialista em Radiologia. Ajude com interpretação de imagens médicas, diagnóstico radiológico e análise de exames.',
  BIOMEDICINA: 'Você é um especialista em Biomedicina. Forneça informações sobre pesquisa genética, bioinformática e técnicas biomédicas.',
  ENFERMAGEM: 'Você é um especialista em Enfermagem. Ajude com protocolos clínicos, procedimentos e cuidados de enfermagem.',
  QUIMICA: 'Você é um especialista em Química. Ajude com reações químicas, cálculos estequiométricos e explicações de conceitos químicos.',
  FARMACIA: 'Você é um especialista em Farmácia. Forneça informações sobre medicamentos, interações medicamentosas e dosagens.',
}

interface ChatRequest extends Request {
  body: {
    message: string
    category?: string
    conversationHistory?: Array<{ role: string; content: string }>
  }
}

router.post('/', async (req: ChatRequest, res: Response) => {
  try {
    const { message, category = 'MEDICINA', conversationHistory = [] } = req.body

    if (!message) {
      return res.status(400).json({ error: 'Mensagem é obrigatória' })
    }

    const systemPrompt = systemPrompts[category] || systemPrompts.MEDICINA

    const messages = [
      ...conversationHistory,
      { role: 'user' as const, content: message },
    ]

    const response = await openai.chat.completions.create({
      model: 'gpt-4-turbo',
      system: systemPrompt,
      messages: messages as any,
      temperature: 0.7,
      max_tokens: 1000,
    })

    const assistantMessage = response.choices[0]?.message?.content || 'Desculpe, não consegui gerar uma resposta.'

    res.json({
      message: assistantMessage,
      category,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Erro no chat:', error)
    res.status(500).json({ error: 'Erro ao processar mensagem' })
  }
})

router.post('/image-analysis', async (req: Request, res: Response) => {
  try {
    const { imageUrl, category = 'RADIOLOGIA' } = req.body

    if (!imageUrl) {
      return res.status(400).json({ error: 'URL da imagem é obrigatória' })
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-4-vision',
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'image_url',
              image_url: { url: imageUrl },
            },
            {
              type: 'text',
              text: `Analise esta imagem médica da categoria ${category} e forneça uma análise detalhada.`,
            },
          ],
        },
      ],
      max_tokens: 1000,
    })

    const analysis = response.choices[0]?.message?.content || 'Não foi possível analisar a imagem.'

    res.json({
      analysis,
      category,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Erro na análise de imagem:', error)
    res.status(500).json({ error: 'Erro ao analisar imagem' })
  }
})

export default router
