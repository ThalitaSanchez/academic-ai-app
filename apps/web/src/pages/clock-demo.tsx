import React from 'react'
import Head from 'next/head'
import MultiTimezoneClock from '@/components/TimezoneClocks'
import WorldClock from '@/components/WorldClock'

export default function ClockDemo() {
  return (
    <>
      <Head>
        <title>Relógios Digitais - Academic AI App</title>
        <meta name="description" content="Demonstração de relógios digitais com fusos horários" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 p-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <section className="text-center">
            <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">⏰ Relógios Digitais</h1>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Acompanhe a hora em diferentes localidades
            </p>
          </section>

          {/* World Clock */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Hora Global</h2>
            <div className="grid gap-4">
              <WorldClock size="large" showSeconds={true} is24Hour={true} />
              <WorldClock size="medium" showSeconds={false} is24Hour={false} />
              <WorldClock size="small" showSeconds={true} is24Hour={true} />
            </div>
          </section>

          {/* Multi Timezone Clock */}
          <section>
            <MultiTimezoneClock />
          </section>

          {/* Info Section */}
          <section className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">ℹ️ Informações</n            <div className="grid md:grid-cols-2 gap-6 text-slate-600 dark:text-slate-400">
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">🌍 Fusos Horários Suportados</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>América do Sul (São Paulo)</li>
                  <li>Europa (Lisboa, Londres, Paris)</li>
                  <li>Ásia (Tóquio, Dubai, Hong Kong)</li>
                  <li>América do Norte (Nova York, Los Angeles)</li>
                  <li>Oceania (Sydney, Auckland)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">⚙️ Recursos</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Atualização em tempo real</li>
                  <li>Suporte a múltiplos fusos</li>
                  <li>Formato 12h e 24h</li>
                  <li>Exibição de segundos opcional</li>
                  <li>Design responsivo e dark mode</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
