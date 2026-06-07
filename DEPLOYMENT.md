# 🚀 Guia de Publicação - Academic AI App

## Publicar como Web App - Passo a Passo

### 📋 Pré-requisitos
- GitHub account (já tem ✓)
- Conta no Vercel (gratuita)
- Variáveis de ambiente configuradas

---

## **PASSO 1: Preparar Variáveis de Ambiente**

### 1.1 Crie o arquivo `.env.example`
```bash
# Copie suas variáveis necessárias para este arquivo
# Este arquivo será usado como referência para produção
```

**Variáveis essenciais que você precisa:**
```env
# OpenAI
OPENAI_API_KEY=sk_...

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://...supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...

# Database
DATABASE_URL=postgresql://user:password@host:5432/dbname

# Redis (opcional para web app público)
REDIS_URL=redis://...

# Application
NEXT_PUBLIC_API_URL=https://seu-app.vercel.app
NODE_ENV=production
```

**⚠️ Importante:** Nunca faça commit de chaves privadas!

---

## **PASSO 2: Deploy no Vercel (Recomendado)**

### 2.1 Criar conta no Vercel
1. Acesse https://vercel.com
2. Clique em "Sign Up"
3. Escolha "Continue with GitHub"
4. Autorize o Vercel a acessar seus repositórios

### 2.2 Importar Projeto
1. Dashboard do Vercel → "New Project"
2. Selecione `academic-ai-app`
3. Configure as variáveis de ambiente:
   - Clique em "Environment Variables"
   - Adicione todas as variáveis do `.env.example`
4. Clique em "Deploy"

### 2.3 Configurar Deploy Automático
**Já está configurado!** Cada push no `main` vai fazer deploy automaticamente.

---

## **PASSO 3: Alternativa - Deploy no Railway/Heroku**

### Se preferir outras plataformas:

#### **Railway.app** (Recomendado como alternativa)
```bash
# 1. Instale Railway CLI
npm i -g @railway/cli

# 2. Faça login
railway login

# 3. Crie projeto
railway init

# 4. Configure variáveis
railway variables

# 5. Deploy
railway up
```

#### **Fly.io**
```bash
# 1. Instale Fly CLI
curl -L https://fly.io/install.sh | sh

# 2. Faça login
fly auth login

# 3. Configure app.toml
# 4. Deploy
fly deploy
```

---

## **PASSO 4: Configurar Banco de Dados em Produção**

### Opções Recomendadas:

#### **Supabase** (Integrado com seu projeto)
- Já tem PostgreSQL + Auth
- Gratuito até 500MB
- https://supabase.com

#### **Vercel Postgres** (Integrado com Vercel)
```bash
# Se usar Vercel:
vercel env pull
# Copia as variáveis de Postgres automaticamente
```

---

## **PASSO 5: Domínio Customizado**

### Adicionar seu próprio domínio:

**Vercel:**
1. Projeto → Settings → Domains
2. Adicione seu domínio
3. Configure DNS (instruções aparecem na página)

**Comprar domínio:**
- Namecheap
- GoDaddy
- Google Domains

---

## **PASSO 6: Monitoramento e Logs**

### Ver logs de deploy:
```bash
# Vercel
vercel logs

# Railway
railway logs

# Acompanhe em tempo real no dashboard
```

### Configurar alertas:
- Discord webhook para notificações
- Sentry para error tracking (gratuito)

---

## **PASSO 7: Segurança em Produção**

- ✅ HTTPS automático (Vercel cuida)
- ✅ Environment variables secretas
- ✅ CORS configurado
- ✅ Rate limiting no backend
- ✅ Sanitização de inputs

---

## **Checklist Final** ✓

```
[ ] Variáveis de ambiente configuradas
[ ] Banco de dados em produção
[ ] Authentication (Google/GitHub) funcionando
[ ] HTTPS ativo
[ ] Domínio customizado (opcional)
[ ] CI/CD automático
[ ] Logs configurados
[ ] Backups do banco
[ ] Monitoramento ativo
[ ] Documentação atualizada
```

---

## **Links Úteis**

- 📚 [Vercel Docs](https://vercel.com/docs)
- 🚂 [Railway Docs](https://docs.railway.app)
- 🟦 [Supabase Docs](https://supabase.com/docs)
- 🔐 [Next.js Production](https://nextjs.org/docs/going-to-production)

---

## **Suporte**

Problemas durante o deploy? Abra uma issue com:
```
- Plataforma (Vercel, Railway, etc)
- Mensagem de erro exata
- Logs relevantes
- Variáveis de ambiente (sem valores secretos!)
```

---

**Happy deploying! 🎉**