import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { ArrowRight, BookOpen, Brain, Zap, Users, TrendingUp, Shield } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Academic AI App - Plataforma de Aprendizado Inteligente</title>
        <meta name="description" content="Plataforma acadêmica com IA integrada para Biomedicina, Medicina, Radiologia, Enfermagem, Química e Farmácia" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-slate-950 dark:to-slate-900">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
          <div className="container-custom">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-slate-900 dark:text-white">Academic AI</span>
              </div>
              <div className="hidden md:flex gap-8">
                <a href="#features" className="text-slate-600 dark:text-slate-300 hover:text-primary-600 transition">
                  Features
                </a>
                <a href="#disciplines" className="text-slate-600 dark:text-slate-300 hover:text-primary-600 transition">
                  Disciplinas
                </a>
                <a href="#cta" className="text-slate-600 dark:text-slate-300 hover:text-primary-600 transition">
                  Contato
                </a>
              </div>
              <div className="flex gap-4">
                <Link href="/login" className="px-4 py-2 text-primary-600 dark:text-primary-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition">
                  Login
                </Link>
                <Link href="/signup" className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition font-medium">
                  Começar
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="container-custom py-20 md:py-32">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700">
              <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
              <span className="text-sm text-slate-600 dark:text-slate-300">✨ Novo: Análise de imagens com IA</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white leading-tight">
              Inteligência Artificial ao Serviço da
              <span className="gradient-text"> Educação Médica</span>
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Plataforma completa com IA para Biomedicina, Radiologia, Medicina, Enfermagem, Química e Farmácia.
            </p>
            
            <div className="flex gap-4 justify-center pt-8 flex-wrap">
              <Link href="/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition font-semibold text-lg shadow-lg hover:shadow-xl">
                Começar Agora <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/clock-demo" className="inline-flex items-center gap-2 px-8 py-4 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition font-semibold text-lg">
                Ver Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container-custom py-20">
          <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-16">Recursos Principais</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: 'Chat IA Inteligente',
                description: 'Assistente baseado em GPT-4 com conhecimento específico de cada disciplina.'
              },
              {
                icon: BookOpen,
                title: 'Biblioteca Estruturada',
                description: 'Materiais educacionais organizados por disciplina e nível de dificuldade.'
              },
              {
                icon: Zap,
                title: 'Análise de Imagens',
                description: 'Processamento de radiografias e microscopia com IA avançada.'
              },
              {
                icon: TrendingUp,
                title: 'Progresso Personalizado',
                description: 'Dashboard com recomendações adaptadas ao seu desempenho.'
              },
              {
                icon: Users,
                title: 'Comunidade de Aprendizado',
                description: 'Conecte-se com outros estudantes e compartilhe conhecimento.'
              },
              {
                icon: Shield,
                title: 'Privacidade Garantida',
                description: 'Seus dados são protegidos com criptografia de ponta.'
              },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-smooth border border-slate-200 dark:border-slate-700">
                <feature.icon className="w-12 h-12 text-primary-600 dark:text-primary-400 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Disciplines Section */}
        <section id="disciplines" className="container-custom py-20">
          <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-16">Disciplinas Suportadas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Medicina', icon: '🩺', color: 'from-red-500 to-pink-500', desc: 'Diagnóstico e tratamento' },
              { name: 'Radiologia', icon: '🔬', color: 'from-blue-500 to-cyan-500', desc: 'Análise de imagens médicas' },
              { name: 'Biomedicina', icon: '🧬', color: 'from-purple-500 to-pink-500', desc: 'Pesquisa genética' },
              { name: 'Enfermagem', icon: '💊', color: 'from-green-500 to-teal-500', desc: 'Cuidados e protocolos' },
              { name: 'Química', icon: '⚗️', color: 'from-orange-500 to-red-500', desc: 'Reações e moléculas' },
              { name: 'Farmácia', icon: '💉', color: 'from-indigo-500 to-blue-500', desc: 'Medicamentos e dosagens' },
            ].map((discipline, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${discipline.color} p-8 rounded-xl text-white shadow-lg hover:shadow-xl transition-smooth cursor-pointer transform hover:scale-105`}>
                <div className="text-5xl mb-3">{discipline.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{discipline.name}</h3>
                <p className="text-white/80">{discipline.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="container-custom py-20">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-12">Números que Falam</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: '50K+', label: 'Usuários Ativos' },
                { number: '1M+', label: 'Questões Resolvidas' },
                { number: '6', label: 'Disciplinas' },
                { number: '24/7', label: 'Suporte IA' },
              ].map((stat, idx) => (
                <div key={idx}>
                  <div className="text-5xl font-bold mb-2">{stat.number}</div>
                  <p className="text-white/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="container-custom py-20 text-center">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Pronto para Começar?</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Acesse agora e aproveite a IA para potencializar seu aprendizado acadêmico em qualquer disciplina médica.
          </p>
          <Link href="/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition text-lg font-semibold shadow-lg hover:shadow-xl">
            Criar Conta Grátis <ArrowRight className="w-5 h-5" />
          </Link>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 dark:bg-black text-slate-400 py-12 mt-20">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-white mb-4">Academic AI</h3>
                <p className="text-sm">Plataforma de educação com IA para disciplinas médicas.</p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4">Produto</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#features" className="hover:text-white transition">Features</a></li>
                  <li><a href="#disciplines" className="hover:text-white transition">Disciplinas</a></li>
                  <li><a href="#" className="hover:text-white transition">Preços</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4">Empresa</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white transition">Sobre</a></li>
                  <li><a href="#" className="hover:text-white transition">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition">Contato</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4">Legal</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white transition">Privacidade</a></li>
                  <li><a href="#" className="hover:text-white transition">Termos</a></li>
                  <li><a href="#" className="hover:text-white transition">Cookies</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-800 pt-8 text-center text-sm">
              <p>&copy; 2024 Academic AI App. Todos os direitos reservados. Desenvolvido com ❤️ para educação.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
