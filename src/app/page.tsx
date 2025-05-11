'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const [query, setQuery] = useState('')
  const [details, setDetails] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/vehicle/${encodeURIComponent(query)}`)
  }

  return (
    <section className="max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">
        Iegūsti ieskatu par iekāroto transportlīdzekli!
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Ievadiet saiti vai valsts nr. zīmi"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
          className="w-full px-4 py-2 rounded bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <textarea
          placeholder="ievadiet informāciju par detalizētu ieskatu (nav obligāts)"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className="w-full h-32 px-4 py-2 rounded bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-green-500 rounded hover:bg-green-600 transition"
        >
          Turpināt
        </button>
      </form>
    </section>
  )
}
