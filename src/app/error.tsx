'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100">
      <div className="text-center max-w-md mx-auto p-6">
        <div className="text-6xl mb-4">⚠️</div>
        <h2 className="text-2xl font-bold text-red-800 mb-4">Something went wrong!</h2>
        <p className="text-red-600 mb-6">
          We apologize for the inconvenience. There was an error loading the 74th IPC 2025 website.
        </p>
        <button
          onClick={reset}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  )
}