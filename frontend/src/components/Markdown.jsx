import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { API_URL } from '../config'

function Markdown({ path }) {
    const [content, setContent] = useState('')

    useEffect(async () => {
        const response = await fetch(API_URL + path)
        const content = await response.text()
        setContent(content)
    }, [path])

    return (
        <ReactMarkdown>{content}</ReactMarkdown>
    )
}

export default Markdown