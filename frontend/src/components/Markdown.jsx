import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

function Markdown({ path }) {
    const [content, setContent] = useState('')

    useEffect(async () => {
        const response = await fetch(import.meta.env.VITE_API_URL + path)
        const content = await response.text()
        setContent(content)
    }, [path])

    return (
        <ReactMarkdown>{content}</ReactMarkdown>
    )
}

export default Markdown