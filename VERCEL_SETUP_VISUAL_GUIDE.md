# 🚀 Guia Visual Vercel - Deploy Passo a Passo

## 📍 ETAPA 1: Na Tela "New Project"

### 1.1 - Você vai ver isto:
```
┌─────────────────────────────────────────┐
│ New Project                             │
├─────────────────────────────────────────┤
│ Importing from GitHub                   │
│ 🔗 ThalitaSanchez/academic-ai-app       │
│    📌 main                              │
├─────────────────────────────────────────┤
│ Vercel Team: Thalita's projects         │
│ Project Name: academic-ai-app           │
├─────────────────────────────────────────┤
│ Application Preset: Other               │
│ Root Directory: ./                      │
├─────────────────────────────────────────┤
│ ▼ Build and Output Settings             │
│ ▼ Environment Variables                 │
├─────────────────────────────────────────┤
│         [Deploy Button]                 │
└─────────────────────────────────────────┘
```

### 1.2 - Clique em "Environment Variables" ⬇️
```
ANTES: ▼ Environment Variables
DEPOIS: ▲ Environment Variables (se expande)
```

---

## 📍 ETAPA 2: Adicionar Variáveis - PASSO A PASSO

### 2.1 - Clique no ícone "+" ou "Add"
```
┌──────────────────────────────────────┐
│ Environment Variables                │
├──────────────────────────────────────┤
│ [+ Add New]    ou    [Add Button]    │
│                                      │
│ Nome: _______________  [x]          │
│ Valor: _______________  [x]         │
└──────────────────────────────────────┘
```

### 2.2 - PRIMEIRA variável: Supabase URL

```
📝 Preencha assim:

Nome (Name):
┌──────────────────────────────────────────┐
│ NEXT_PUBLIC_SUPABASE_URL                 │
└──────────────────────────────────────────┘

Valor (Value):
┌──────────────────────────────────────────┐
│ https://xyzabc.supabase.co               │
└──────────────────────────────────────────┘
(Cole aqui a URL que copiou do Supabase)

✅ Clique em "Save" ou "Add"
```

### 2.3 - SEGUNDA variável: Supabase Key

```
📝 Preencha assim:

Nome (Name):
┌──────────────────────────────────────────┐
│ NEXT_PUBLIC_SUPABASE_ANON_KEY            │
└──────────────────────────────────────────┘

Valor (Value):
┌──────────────────────────────────────────┐
│ eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...  │
└──────────────────────────────────────────┘
(Cole aqui a chave que copiou do Supabase)

✅ Clique em "Save" ou "Add"
```

### 2.4 - TERCEIRA variável: OpenAI Key

```
📝 Preencha assim:

Nome (Name):
┌──────────────────────────────────────────┐
│ OPENAI_API_KEY                           │
└──────────────────────────────────────────┘

Valor (Value):
┌──────────────────────────────────────────┐
│ sk_live_xxx...                           │
└──────────────────────────────────────────┘
(Cole aqui a chave que copiou do OpenAI)

✅ Clique em "Save" ou "Add"
```

---

## 📍 ETAPA 3: Verificar Variáveis Adicionadas

Depois de adicionar as 3, você vai ver:

```
┌──────────────────────────────────────────────────┐
│ Environment Variables                           │
├──────────────────────────────────────────────────┤
│ ✅ NEXT_PUBLIC_SUPABASE_URL      https://...    │
│ ✅ NEXT_PUBLIC_SUPABASE_ANON_KEY eyJhbGci...   │
│ ✅ OPENAI_API_KEY                sk_live...    │
└──────────────────────────────────────────────────┘
```

---

## 📍 ETAPA 4: FAZER DEPLOY

### 4.1 - Scroll até o final da página

```
(role para baixo até ver)

┌──────────────────────────────────────┐
│        ⬛ [Deploy Button] ⬛          │
└──────────────────────────────────────┘
```

### 4.2 - Clique em "Deploy" 🎯

```
O Vercel vai mostrar:
⏳ Building...
⏳ Optimizing...
⏳ Creating serverless functions...
...

Espere 3-5 minutos ⏳
```

---

## 📍 ETAPA 5: Sucesso! 🎉

Quando terminar, você vai ver:

```
┌──────────────────────────────────────┐
│ ✅ Deployment Complete!              │
├──────────────────────────────────────┤
│ Visit: https://academic-ai-app-xxx   │
│        .vercel.app                   │
│                                      │
│ [🔗 Copy Link]  [Open]               │
└──────────────────────────────────────┘
```

---

## 🎯 RESUMO VISUAL COMPLETO

```
1️⃣  Tela "New Project" do Vercel
    ↓
2️⃣  Clique "Environment Variables" 
    ↓
3️⃣  Adicione 3 variáveis:
    • NEXT_PUBLIC_SUPABASE_URL
    • NEXT_PUBLIC_SUPABASE_ANON_KEY
    • OPENAI_API_KEY
    ↓
4️⃣  Clique "Deploy"
    ↓
5️⃣  ⏳ Aguarde 3-5 minutos
    ↓
6️⃣  ✅ Seu app está ONLINE! 🎉
```

---

## 📌 DICAS IMPORTANTES

✅ **Copie EXATAMENTE as chaves** (sem espaços)
✅ **Os nomes das variáveis são case-sensitive** (maiúsculas/minúsculas importam)
✅ **Nunca compartilhe suas chaves** (são secretas!)
✅ **Se errar, pode editar depois** em Settings → Environment Variables

---

## 🆘 PROBLEMAS COMUNS

| Problema | Solução |
|----------|---------|
| **Deploy falha** | Verifica se copiou as chaves corretamente |
| **Blank page** | Aguarde mais alguns minutos para o build terminar |
| **Erro 500** | Verifique se as variáveis estão corretas |
| **Não consegue adicionar variável** | Tente recarregar a página (F5) |

---

**Pronto! Agora é só seguir passo a passo e seu app estará online!** 🚀

Tem dúvida em alguma etapa? Me avisa qual!
