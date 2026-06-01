import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="app">
      <h1>CI/CD React Demo</h1>

      <p>
        This small app exists so we can run automated tests in GitHub Actions.
      </p>

      <section className="card">
        <h2>Counter</h2>

        <p data-testid="count-value">
          Count: {count}
        </p>

        <button onClick={() => setCount(count + 1)}>
          Increase
        </button>

        <button onClick={() => setCount(0)}>
          Reset
        </button>
      </section>
    </main>
  )
}

export default App
