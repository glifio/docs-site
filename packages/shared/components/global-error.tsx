'use client'

import { useEffect } from 'react'

interface GlobalErrorProps {
  error: Error
  reset: () => void
}

export const GlobalError = ({ error, reset }: GlobalErrorProps) => {
  useEffect(() => console.error(error), [error])

  return (
    <html>
      <body>
        <h1>Error</h1>
        <p>{error.message}</p>
        <button onClick={() => reset()}>Recover</button>
      </body>
    </html>
  )
}
