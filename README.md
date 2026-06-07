# Academic AI App 🎓

Plataforma acadêmica integrada com IA para apoio ao aprendizado em Biomedicina, Radiologia, Medicina, Enfermagem, Química, Farmácia e outras disciplinas.

## 🚀 Características Principais

- 🤖 **Chat IA Inteligente** - Assistente baseado em OpenAI com conhecimento específico por área
- 📚 **Biblioteca de Conteúdo** - Materiais estruturados por disciplina
- 🖼️ **Processamento de Imagens** - Análise de radiologias e microscopia
- 🧪 **Ferramentas Específicas** - Calculadoras farmacológicas, simuladores
- 📊 **Dashboard Personalizado** - Progresso, recomendações e estatísticas
- 🔍 **Busca Semântica** - Encontre conteúdo por contexto
- 🔐 **Autenticação Segura** - Login com Google, GitHub e Email
- 📱 **Responsivo** - Web e mobile otimizados

## 📋 Stack Tecnológico

### Frontend
- **Next.js 14** - React framework moderno
- **TypeScript** - Type safety
- **Tailwind CSS** - Estilização
- **Zustand** - Gerenciamento de estado
- **React Query** - Gerenciamento de dados
- **Framer Motion** - Animações

### Backend
- **Node.js + Express** - API REST
- **TypeScript** - Type safety
- **PostgreSQL** - Banco de dados
- **Prisma ORM** - Gerenciamento de BD
- **Redis** - Cache e filas
- **Socket.io** - Real-time (chat)

### IA & ML
- **OpenAI API** - GPT-4, Vision para análise de imagens
- **Pinecone/Supabase** - Vector embeddings
- **LangChain** - Orquestração de IA

### Autenticação & Infra
- **Supabase** - Auth + Realtime Database
- **JWT** - Tokens seguros
- **Docker** - Containerização
- **GitHub Actions** - CI/CD

## 🏗️ Estrutura do Projeto

```
academic-ai-app/
├── apps/
│   ├── web/                 # Next.js Frontend
│   ├── mobile/              # React Native (opcional)
│   └── docs/                # Documentação
├── packages/
│   ├── api/                 # Express Backend
│   ├── shared/              # Tipos e utils compartilhados
│   └── ai-core/             # Lógica de IA
├── docker-compose.yml
├── .github/workflows/       # CI/CD
└── README.md
```

## 🚀 Início Rápido

### Pré-requisitos
- Node.js 18+
- Docker & Docker Compose
- npm ou yarn
- Chaves de API (OpenAI, Supabase)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/ThalitaSanchez/academic-ai-app.git
cd academic-ai-app

# Instale dependências
npm install

# Configure variáveis de ambiente
cp .env.example .env.local

# Inicie containers Docker
docker-compose up -d

# Execute migrations
npm run db:migrate

# Inicie desenvolvimento
npm run dev
```

### URLs Locais
- Frontend: http://localhost:3000
- API: http://localhost:4000
- PostgreSQL: localhost:5432
- Redis: localhost:6379

## 📚 Disciplinas Suportadas

### Medicina
- Diagnóstico assistido por IA
- Base de conhecimento médico
- Protocolo de atendimento
- Análise de casos clínicos

### Radiologia
- Processamento de imagens DICOM
- IA para detecção de anomalias
- Análise comparativa
- Laudos assistidos

### Biomedicina
- Análise bioinformática
- Sequenciamento genético
- Modelagem molecular
- Estatísticas biológicas

### Enfermagem
- Protocolos clínicos
- Procedimentos passo a passo
- Triagem de pacientes
- Educação continuada

### Química
- Reações e balanceamento
- Visualizador 3D de moléculas
- Cálculos estequiométricos
- Simulador de experimentos

### Farmácia
- Interações medicamentosas
- Calculadora de dosagens
- Farmacocinética
- Base de medicamentos

## 🔌 Integrações de IA

### Chat Inteligente
- Respostas contextualizadas por disciplina
- Histórico de conversas
- Citações de fontes
- Explicações passo a passo

### Análise de Imagens
- Upload de radiografias
- Detecção automática de anomalias
- Relatórios gerados por IA
- Comparação com casos similares

### Recomendações Personalizadas
- Análise de desempenho
- Sugestão de tópicos
- Conteúdo adaptativo
- Caminhos de aprendizado

## 🗄️ Banco de Dados

Schema principal:
- `users` - Usuários do sistema
- `courses` - Disciplinas/Cursos
- `lessons` - Aulas/Tópicos
- `content` - Materiais educacionais
- `conversations` - Histórico de chats
- `images` - Imagens enviadas e analisadas
- `user_progress` - Progresso do usuário
- `embeddings` - Vetores para busca semântica

## 🔐 Segurança

- ✅ JWT com refresh tokens
- ✅ HTTPS em produção
- ✅ CORS configurado
- ✅ Rate limiting
- ✅ Validação de entrada
- ✅ Sanitização de dados
- ✅ Logs de auditoria

## 📊 Monitoramento

- Sentry para error tracking
- DataDog para performance
- CloudWatch para logs
- Prometheus para métricas

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

MIT License - veja o arquivo LICENSE para detalhes.

## 👤 Autor

**Thalita Sanchez**
- GitHub: [@ThalitaSanchez](https://github.com/ThalitaSanchez)

## 📞 Suporte

Para dúvidas ou sugestões, abra uma issue no repositório.

---

**Desenvolvido com ❤️ para educação**