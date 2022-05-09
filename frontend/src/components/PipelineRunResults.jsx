import { API_URL } from "../config"
import Markdown from "./Markdown"
import style from './PipelineRunResults.module.css'

function PipelineRunResults({ result }) {
    if (!result) {
        return null
    }

    // infer it based on the first PNG path. should this come from the service?
    const markdownPath = '/' + result.pngs[0].split('/', 2).join('/') + '/output.md'

    return (
        <>
            {result.pngs.map(png => (
                <a key={png} href={`${API_URL}/${png}`} target="_blank">
                    <img 
                        className={style.resultImage}
                        src={`${API_URL}/${png}`}
                    />
                </a>
            ))}

            <hr />

            <Markdown path={markdownPath} />
        </>
    )
}

export default PipelineRunResults
