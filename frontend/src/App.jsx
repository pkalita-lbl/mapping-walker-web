import { useState } from 'react'
import PipelineRunForm from './components/PipelineRunForm'
import PipelineRunResults from './components/PipelineRunResults'

import style from './App.module.css'

function App() {
  const [submitting, setSubmitting] = useState(false)
  const [result, setResult] = useState(null)

  const handleSubmit = async (curies) => {
    setResult(null)
    setSubmitting(true)
    const response = await fetch(import.meta.env.VITE_API_URL + '/pipeline', {
      method: 'POST',
      body: JSON.stringify({
        curies: curies.split(/\s*,\s*/)
      }),
      headers: {
        'Content-Type': 'application/json'
      } 
    })
    const json = await response.json()
    setResult(json.result)
    setSubmitting(false)
  }

  return (
    <div className={style.container}>
      <h1>Mapping Walker Demo</h1>
      <PipelineRunForm className={style.form} onSubmit={handleSubmit} submitting={submitting} />
      <PipelineRunResults result={result} />
    </div>
  )
}

export default App
